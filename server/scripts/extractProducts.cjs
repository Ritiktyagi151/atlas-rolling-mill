/**
 * Extract all product content from product_pages JSX files into products.json
 */
const fs = require("fs");
const path = require("path");

const PRODUCT_PAGES_ROOT = path.resolve(
  __dirname,
  "../../client/src/Pages/product_pages"
);
const OUTPUT_PATH = path.resolve(__dirname, "../data/products.json");

const CATEGORY_MAP = {
  gearboxes: "Gearboxes",
  Housingless_Mill_Stands: "Housingless Mill Stands",
  MATERIAL_HANDLING_EQUIPMENT: "Material Handling Equipment",
  OTHER_ALLIED_MACHINERY: "Other Allied Machinery",
  Rolling_Mill_Stands: "Rolling Mill Stands",
  ROLLINGMILLPARTS: "Rolling Mill Parts",
  rollingmillplants: "Rolling Mill Plants",
  "Shearing&CuttingMachine": "Shearing & Cutting Machine",
  TMTEQUIPMENT: "TMT Equipment",
};

function walkJsxFiles(dir, files = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walkJsxFiles(full, files);
    else if (entry.name.endsWith(".jsx")) files.push(full);
  }
  return files;
}

function slugify(name) {
  return name
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .replace(/-+/g, "-");
}

function escapeHtml(s) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function cleanText(raw) {
  if (!raw) return "";
  let t = String(raw);
  // strip JSX expressions { ... } but keep string contents if simple
  t = t.replace(/\{[^}]*\}/g, "");
  // strip HTML/JSX tags
  t = t.replace(/<\/?[A-Za-z][\w.:-]*(\s[^>]*)?>/g, " ");
  // decode common entities
  t = t
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, " ");
  t = t.replace(/\s+/g, " ").trim();
  return t;
}

function stripComments(src) {
  return src
    .replace(/\/\*[\s\S]*?\*\//g, "")
    .replace(/(^|[^:])\/\/.*$/gm, "$1");
}

/**
 * Find the main component return (...) body.
 * Skips early returns inside useEffect cleanup, arrow callbacks, etc.
 * Strategy: find the LAST top-level-ish `return (` before the final export,
 * preferring the one that contains JSX tags (section, motion, div, etc.).
 */
function getReturnBody(src) {
  const candidates = [];
  const re = /\breturn\s*\(/g;
  let m;
  while ((m = re.exec(src)) !== null) {
    const openParen = m.index + m[0].length - 1;
    const body = extractBalanced(src, openParen);
    if (!body) continue;
    // Prefer bodies that look like JSX product content
    const score =
      (body.includes("<section") || body.includes("<motion") ? 100 : 0) +
      (body.includes("<h2") || body.includes(".h2") ? 50 : 0) +
      (body.includes("<p") ? 20 : 0) +
      Math.min(body.length / 100, 50);
    candidates.push({ body, score, index: m.index });
  }
  if (!candidates.length) return src;
  candidates.sort((a, b) => b.score - a.score || b.body.length - a.body.length);
  return candidates[0].body;
}

function extractBalanced(src, openParenIndex) {
  // openParenIndex points at '('
  let i = openParenIndex + 1;
  let depth = 1;
  let inStr = null;
  let inTemplate = false;
  let escaped = false;
  const start = i;
  while (i < src.length && depth > 0) {
    const ch = src[i];
    if (inStr) {
      if (escaped) escaped = false;
      else if (ch === "\\") escaped = true;
      else if (ch === inStr) inStr = null;
      i++;
      continue;
    }
    if (ch === '"' || ch === "'" || ch === "`") {
      inStr = ch;
      i++;
      continue;
    }
    if (ch === "(") depth++;
    else if (ch === ")") depth--;
    i++;
  }
  if (depth !== 0) return null;
  return src.slice(start, i - 1);
}

/**
 * Extract string array items before .map(
 */
function extractMappedArrays(source) {
  const results = [];
  const re =
    /\[\s*((?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*')(?:\s*,\s*(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'))*)\s*,?\s*\]\s*\.map\s*\(/g;
  let m;
  while ((m = re.exec(source)) !== null) {
    const body = m[1];
    const items = [];
    const itemRe = /"((?:\\.|[^"\\])*)"|'((?:\\.|[^'\\])*)'/g;
    let im;
    while ((im = itemRe.exec(body)) !== null) {
      const val = (im[1] !== undefined ? im[1] : im[2])
        .replace(/\\"/g, '"')
        .replace(/\\'/g, "'")
        .replace(/\\n/g, "\n");
      items.push(val.trim());
    }
    if (items.length) {
      results.push({
        index: m.index,
        end: m.index + m[0].length,
        items,
        fullMatch: m[0],
      });
    }
  }
  return results;
}

/**
 * Match heading-like tags including motion.h2, h2, etc.
 */
function matchTaggedBlocks(source, tagBase) {
  // tagBase: h2, h3, p, span, etc.
  // Match <h2>, <motion.h2>, <H2>, etc.
  const re = new RegExp(
    `<(?:[A-Za-z][\\w]*\\.)?${tagBase}(?:\\s[^>]*)?>([\\s\\S]*?)<\\/(?:[A-Za-z][\\w]*\\.)?${tagBase}>`,
    "gi"
  );
  const out = [];
  let m;
  while ((m = re.exec(source)) !== null) {
    out.push({ index: m.index, inner: m[1], full: m[0] });
  }
  return out;
}

function extractLiText(inner) {
  const spans = [];
  for (const s of matchTaggedBlocks(inner, "span")) {
    const t = cleanText(s.inner);
    if (t) spans.push(t);
  }
  if (spans.length) {
    const meaningful = spans.filter(
      (s) => !/^\d{1,2}$/.test(s) && s !== "•" && s !== "✓" && s !== "✔"
    );
    if (meaningful.length) return meaningful.join(" ");
  }
  let t = cleanText(inner);
  t = t.replace(/^[•✓✔\-\d.]+\s*/, "").trim();
  if (!t || /^[\d•✓✔]+$/.test(t)) return "";
  return t;
}

function convertTableToHtml(tableJsx) {
  const rows = [];
  const trRe = /<tr(?:\s[^>]*)?>([\s\S]*?)<\/tr>/gi;
  let trm;
  while ((trm = trRe.exec(tableJsx)) !== null) {
    const cells = [];
    const cellRe = /<(th|td)(?:\s[^>]*)?>([\s\S]*?)<\/\1>/gi;
    let cm;
    while ((cm = cellRe.exec(trm[1])) !== null) {
      const text = cleanText(cm[2]);
      if (text) cells.push({ tag: cm[1].toLowerCase(), text });
    }
    if (cells.length) rows.push(cells);
  }
  if (!rows.length) return "";
  let html = "<table>";
  for (const row of rows) {
    html += "<tr>";
    for (const c of row) {
      html += `<${c.tag}>${escapeHtml(c.text)}</${c.tag}>`;
    }
    html += "</tr>";
  }
  html += "</table>";
  return html;
}

function extractHtmlFromJsx(jsxBody) {
  const events = [];
  const mappedArrays = extractMappedArrays(jsxBody);

  for (const arr of mappedArrays) {
    events.push({
      pos: arr.index,
      type: "list",
      items: arr.items,
      end: arr.end,
    });
  }

  // Headings h1-h6 (including motion.hN)
  for (let level = 1; level <= 6; level++) {
    const tag = `h${level}`;
    for (const block of matchTaggedBlocks(jsxBody, tag)) {
      const text = cleanText(block.inner);
      if (text) {
        events.push({
          pos: block.index,
          type: "heading",
          level: tag,
          text,
        });
      }
    }
  }

  // Paragraphs
  for (const block of matchTaggedBlocks(jsxBody, "p")) {
    const text = cleanText(block.inner);
    if (text) {
      events.push({ pos: block.index, type: "p", text });
    }
  }

  // motion.p if any used motion.p separately - already covered by matchTaggedBlocks with optional prefix

  // Also catch bare text in motion.span marketing labels (optional product content)
  // Skip generic UI-only labels if needed; include product labels like "Steel Mill Solutions"

  // Direct li items not from .map
  const listItemsByPos = [];
  for (const block of matchTaggedBlocks(jsxBody, "li")) {
    const inMap = mappedArrays.some(
      (r) => block.index >= r.index && block.index < r.end
    );
    if (inMap) continue;
    const text = extractLiText(block.inner);
    if (!text) continue;
    // skip if text is just {item} residue empty already handled
    listItemsByPos.push({ pos: block.index, text });
  }

  if (listItemsByPos.length) {
    let group = [listItemsByPos[0]];
    for (let i = 1; i < listItemsByPos.length; i++) {
      const prev = listItemsByPos[i - 1];
      const cur = listItemsByPos[i];
      if (cur.pos - prev.pos < 900) group.push(cur);
      else {
        events.push({
          pos: group[0].pos,
          type: "list",
          items: group.map((g) => g.text),
        });
        group = [cur];
      }
    }
    events.push({
      pos: group[0].pos,
      type: "list",
      items: group.map((g) => g.text),
    });
  }

  // Tables
  const tableRe = /<table[\s\S]*?<\/table>/gi;
  let tm;
  while ((tm = tableRe.exec(jsxBody)) !== null) {
    const html = convertTableToHtml(tm[0]);
    if (html) events.push({ pos: tm.index, type: "raw", html });
  }

  // Phone links
  const aRe =
    /<a(?:\s[^>]*)?>([\s\S]*?)<\/a>/gi;
  let am;
  while ((am = aRe.exec(jsxBody)) !== null) {
    const text = cleanText(am[1]);
    if (text && /^\+?[\d\s-]{8,}$/.test(text)) {
      events.push({ pos: am.index, type: "p", text });
    }
  }

  // Sort by document order
  events.sort((a, b) => a.pos - b.pos);

  // Deduplicate consecutive identical list/p content at same position
  const fragments = [];
  let lastSig = "";
  for (const ev of events) {
    let frag = "";
    if (ev.type === "heading") {
      frag = `<${ev.level}>${escapeHtml(ev.text)}</${ev.level}>`;
    } else if (ev.type === "p") {
      frag = `<p>${escapeHtml(ev.text)}</p>`;
    } else if (ev.type === "list") {
      const lis = ev.items
        .map((item) => `<li>${escapeHtml(item)}</li>`)
        .join("");
      frag = `<ul>${lis}</ul>`;
    } else if (ev.type === "raw") {
      frag = ev.html;
    }
    const sig = frag;
    if (sig === lastSig) continue;
    lastSig = sig;
    fragments.push(frag);
  }

  return fragments.join("");
}

function inferName(html, filePath) {
  // Prefer first h2
  const h2 = html.match(/<h2>(.*?)<\/h2>/i);
  if (h2) return unescapeName(h2[1]);
  const h1 = html.match(/<h1>(.*?)<\/h1>/i);
  if (h1) return unescapeName(h1[1]);
  // Prefer product-like h3 over "Product Description"
  const h3s = [...html.matchAll(/<h3>(.*?)<\/h3>/gi)].map((m) =>
    unescapeName(m[1])
  );
  for (const h of h3s) {
    if (!/^(product description|features|specifications|applications)$/i.test(h)) {
      return h;
    }
  }
  if (h3s.length) return h3s[0];
  return filenameToName(filePath);
}

function unescapeName(s) {
  return s
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .trim();
}

function filenameToName(filePath) {
  const base = path.basename(filePath, ".jsx");
  // Known renames for nicer product titles
  const map = {
    Helicalgear: "Helical Gears",
    Piniongearbox: "Pinion Gear Box",
    Reductioncumgearbox: "Reduction Cum Pinion Gear Box",
    Reductiongearbox: "Reduction Gear Box",
    Speedincrease: "Speed Increaser Gear Box",
    HousinglessMillStands: "Housingless Mill Stands",
    Coilers: "Coilers",
    Decoilers: "Decoilers",
    FurnacePusher: "Furnace Pusher",
    RollerConveyors: "Roller Conveyors",
    VerticalLoopers: "Vertical Loopers",
    YTables: "Y-Tables",
    PinchRolls: "Pinch Rolls",
    StraighteningMachine: "Straightening Machine",
    VerticalEdger: "Vertical Edger",
    Cardenshaft: "Cardan Shaft",
    Flywheel: "Flywheel",
    Gearcoupling: "Gear Coupling",
    Rollerbox: "Roller Guide Box",
    Spindles: "Spindles",
    Universalcoupling: "Universal Coupling",
    RollingMillStands: "Rolling Mill Stands",
    Barwirerodmills: "Bar & Wire Rod Mills",
    Sectionmills: "Section Mills",
    stripmills: "Strip Mills",
    BilletShearSection: "Billet Shear",
    ColdshearMachine: "Cold Shear Machine",
    CropShearSection: "Crop Shear",
    EndCuttingshearMachine: "End Cutting Shear Machine",
    FlyingShearMachine: "Flying Shear Machine",
    HotBilletshearingMachine: "Hot Billet Shearing Machine",
    HotSaw: "Hot Saw",
    RotaryshearMachine: "Rotary Shear Machine",
    ScrapPlateMachine: "Scrap & Plate Shear Machine",
    SnapshearMachine: "Snap Shear Machine",
    Coolingbed: "Cooling Bed",
    Quenchingbox: "Quenching Box",
    Tailbreaker: "Tail Breaker",
    Twinchannel: "Twin Channel",
  };
  if (map[base]) return map[base];
  return base
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/_/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

/**
 * Prefer filename-based canonical product name when h2 is a marketing slogan
 * that doesn't clearly name the product. Keep h2 if it contains product keywords
 * or matches filename closely.
 */
function resolveProductName(html, filePath) {
  const fromFile = filenameToName(filePath);
  const fromHtml = inferName(html, filePath);

  // If first h2 exists, prefer it as the page title (marketing titles are still the page title)
  const h2 = html.match(/<h2>(.*?)<\/h2>/i);
  if (h2) {
    const title = unescapeName(h2[1]);
    // Prefer cleaner short product name from file if h2 is long marketing line
    // But user asked for product name - use the main product title from the page
    // Use h2 when it's the primary product heading
    return title;
  }
  return fromHtml || fromFile;
}

function getCategoryFromPath(filePath) {
  const rel = path.relative(PRODUCT_PAGES_ROOT, filePath);
  const folder = rel.split(path.sep)[0];
  return CATEGORY_MAP[folder] || folder;
}

function processFile(filePath) {
  let src = fs.readFileSync(filePath, "utf8");
  src = stripComments(src);
  const body = getReturnBody(src);
  const description = extractHtmlFromJsx(body);
  const name = resolveProductName(description, filePath);
  const category = getCategoryFromPath(filePath);
  const slug = slugify(name);

  return {
    name,
    slug,
    hasCategory: true,
    category,
    description,
    _source: path.relative(PRODUCT_PAGES_ROOT, filePath),
    _bodyLen: body.length,
  };
}

function ensureUniqueSlugs(products) {
  const seen = {};
  for (const p of products) {
    let base = p.slug;
    if (!seen[base]) {
      seen[base] = 1;
    } else {
      seen[base]++;
      p.slug = `${base}-${seen[base]}`;
    }
  }
}

function main() {
  const files = walkJsxFiles(PRODUCT_PAGES_ROOT).sort((a, b) =>
    a.localeCompare(b)
  );
  console.error(`Found ${files.length} product pages`);

  const products = [];
  for (const f of files) {
    const p = processFile(f);
    const ok = p.description && p.description.length >= 50;
    console.error(
      `${ok ? "OK" : "WARN"}: ${p._source} -> "${p.name}" [${p.category}] desc=${p.description.length} body=${p._bodyLen}`
    );
    products.push(p);
  }

  ensureUniqueSlugs(products);

  const output = products.map(
    ({ name, slug, hasCategory, category, description }) => ({
      name,
      slug,
      hasCategory,
      category,
      description,
    })
  );

  fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });
  fs.writeFileSync(OUTPUT_PATH, JSON.stringify(output, null, 2), "utf8");
  console.error(`\nWrote ${output.length} products to ${OUTPUT_PATH}`);

  const slugs = new Set(output.map((p) => p.slug));
  console.error(`Unique slugs: ${slugs.size}/${output.length}`);
  const thin = output.filter((p) => !p.description || p.description.length < 50);
  if (thin.length) {
    console.error(`Thin descriptions: ${thin.map((p) => p.name).join(", ")}`);
  }
}

main();

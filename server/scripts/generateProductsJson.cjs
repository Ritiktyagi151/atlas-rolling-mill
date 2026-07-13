const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..', '..');
const sourceDir = path.join(rootDir, 'client', 'src', 'Pages', 'product_pages');
const outputFile = path.join(rootDir, 'server', 'data', 'products.json');

const categoryMap = {
  gearboxes: 'Gearboxes',
  Housingless_Mill_Stands: 'Housingless Mill Stands',
  MATERIAL_HANDLING_EQUIPMENT: 'Material Handling Equipment',
  OTHER_ALLIED_MACHINERY: 'Other Allied Machinery',
  Rolling_Mill_Stands: 'Rolling Mill Stands',
  ROLLINGMILLPARTS: 'Rolling Mill Parts',
  rollingmillplants: 'Rolling Mill Plants',
  'Shearing&CuttingMachine': 'Shearing & Cutting Machine',
  TMTEQUIPMENT: 'TMT Equipment',
};

function slugify(value) {
  return String(value)
    .normalize('NFKD')
    .replace(/[^\w\s-]/g, '')
    .trim()
    .toLowerCase()
    .replace(/[\s_-]+/g, '-')
    .replace(/-+/g, '-');
}

function stripTags(value) {
  return String(value)
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function extractTitle(content) {
  const match = content.match(/<h2[^>]*>(.*?)<\/h2>/i);
  if (!match) {
    return '';
  }

  return stripTags(match[1]);
}

function extractDescription(content) {
  const paragraphs = [...content.matchAll(/<(?:motion\.)?p[^>]*>(.*?)<\/\s*(?:motion\.)?p>/gis)]
    .map((item) => stripTags(item[1]))
    .filter(Boolean)
    .slice(0, 3);

  if (!paragraphs.length) {
    return '<p>Product details are available on the dedicated product page.</p>';
  }

  const body = paragraphs
    .map((paragraph) => `<p>${paragraph}</p>`)
    .join('');

  return body;
}

function listComponentFiles(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...listComponentFiles(fullPath));
    } else if (entry.isFile() && entry.name.endsWith('.jsx')) {
      files.push(fullPath);
    }
  }

  return files;
}

const componentFiles = listComponentFiles(sourceDir).sort();

const products = componentFiles.map((filePath) => {
  const content = fs.readFileSync(filePath, 'utf8');
  const relativePath = path.relative(sourceDir, filePath);
  const folderName = relativePath.split(path.sep)[0];
  const fileName = path.basename(filePath, '.jsx');
  const name = extractTitle(content) || fileName.replace(/([a-z])([A-Z])/g, '$1 $2');
  const slug = slugify(name);

  return {
    name,
    slug,
    hasCategory: true,
    category: categoryMap[folderName] || 'Other Products',
    description: extractDescription(content),
  };
});

fs.writeFileSync(outputFile, `${JSON.stringify(products, null, 2)}\n`, 'utf8');
console.log(`Generated ${products.length} products in ${path.relative(rootDir, outputFile)}`);

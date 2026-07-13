/**
 * Template registry
 * ------------------
 * Each template is plain HTML that Tiptap parses into nodes on insert,
 * so templates stay fully editable afterwards. To add a new template,
 * just push another object here (or, later, replace this static array
 * with a fetch() call to a backend "content-templates" collection —
 * the TemplateMenu component doesn't care where the list comes from).
 *
 * Shape:
 *   { id, label, category, html }
 */
export const TEMPLATES = [
  {
    id: "two-column",
    label: "Two-column layout",
    category: "Layout",
    html: `
      <table class="editor-table layout-columns">
        <tbody>
          <tr>
            <td><p><strong>Column heading</strong></p><p>Write the first column's content here.</p></td>
            <td><p><strong>Column heading</strong></p><p>Write the second column's content here.</p></td>
          </tr>
        </tbody>
      </table>
    `,
  },
  {
    id: "comparison-table",
    label: "Comparison table",
    category: "Layout",
    html: `
      <table class="editor-table">
        <tbody>
          <tr><th>Feature</th><th>Option A</th><th>Option B</th></tr>
          <tr><td>Price</td><td>—</td><td>—</td></tr>
          <tr><td>Warranty</td><td>—</td><td>—</td></tr>
          <tr><td>Material</td><td>—</td><td>—</td></tr>
        </tbody>
      </table>
    `,
  },
  {
    id: "tech-spec",
    label: "Technical specification",
    category: "Product",
    html: `
      <h3>Technical Specifications</h3>
      <table class="editor-table">
        <tbody>
          <tr><td><strong>Model</strong></td><td>—</td></tr>
          <tr><td><strong>Capacity</strong></td><td>—</td></tr>
          <tr><td><strong>Power</strong></td><td>—</td></tr>
          <tr><td><strong>Dimensions</strong></td><td>—</td></tr>
          <tr><td><strong>Weight</strong></td><td>—</td></tr>
        </tbody>
      </table>
    `,
  },
  {
    id: "info-box",
    label: "Information box",
    category: "Content",
    html: `<div data-type="callout" data-variant="info"><p><strong>Note:</strong> Add important information here.</p></div>`,
  },
  {
    id: "warning-box",
    label: "Warning box",
    category: "Content",
    html: `<div data-type="callout" data-variant="warning"><p><strong>Warning:</strong> Add a caution note here.</p></div>`,
  },
  {
    id: "feature-list",
    label: "Feature list",
    category: "Product",
    html: `
      <h3>Key Features</h3>
      <ul>
        <li>Feature one — short description</li>
        <li>Feature two — short description</li>
        <li>Feature three — short description</li>
      </ul>
    `,
  },
  {
    id: "product-info",
    label: "Product information section",
    category: "Product",
    html: `
      <h2>Product Overview</h2>
      <p>Describe the product's purpose and primary benefit in 2-3 sentences.</p>
      <h3>Applications</h3>
      <ul>
        <li>Application one</li>
        <li>Application two</li>
      </ul>
    `,
  },
];

/**
 * getTemplates
 * Returns the available templates, grouped by category.
 * Swap the body of this function for an API call when templates
 * move to the CMS/backend — the rest of the app won't need to change.
 */
export function getTemplatesByCategory() {
  return TEMPLATES.reduce((groups, tpl) => {
    groups[tpl.category] = groups[tpl.category] || [];
    groups[tpl.category].push(tpl);
    return groups;
  }, {});
}

export default TEMPLATES;

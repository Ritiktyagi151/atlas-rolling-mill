import { Extension } from "@tiptap/core";

/**
 * Indent
 * Adds increaseIndent / decreaseIndent commands that adjust a `marginLeft`
 * style on block nodes (paragraph, heading, list items). Works independently
 * of nested bullet/ordered lists so it won't fight with those extensions.
 */
const INDENT_STEP = 24; // px per indent level
const MAX_INDENT = 240; // px (10 levels)

export const Indent = Extension.create({
  name: "indent",

  addOptions() {
    return {
      types: ["paragraph", "heading", "listItem", "taskItem"],
    };
  },

  addGlobalAttributes() {
    return [
      {
        types: this.options.types,
        attributes: {
          indent: {
            default: 0,
            parseHTML: (element) => {
              const margin = parseInt(element.style.marginLeft, 10);
              return Number.isNaN(margin) ? 0 : Math.round(margin / INDENT_STEP);
            },
            renderHTML: (attributes) => {
              if (!attributes.indent) return {};
              return {
                style: `margin-left: ${attributes.indent * INDENT_STEP}px`,
              };
            },
          },
        },
      },
    ];
  },

  addCommands() {
    const applyIndent = (delta) => ({ tr, state, dispatch }) => {
      const { selection } = state;
      let changed = false;

      state.doc.nodesBetween(selection.from, selection.to, (node, pos) => {
        if (this.options.types.includes(node.type.name)) {
          const current = node.attrs.indent || 0;
          const next = Math.min(
            MAX_INDENT / INDENT_STEP,
            Math.max(0, current + delta)
          );
          if (next !== current) {
            tr.setNodeMarkup(pos, undefined, { ...node.attrs, indent: next });
            changed = true;
          }
        }
      });

      if (changed && dispatch) dispatch(tr);
      return changed;
    };

    return {
      increaseIndent: () => applyIndent(1),
      decreaseIndent: () => applyIndent(-1),
    };
  },
});

export default Indent;

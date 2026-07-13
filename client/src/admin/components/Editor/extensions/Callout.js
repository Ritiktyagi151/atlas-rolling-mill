import { Node, mergeAttributes } from "@tiptap/core";

/**
 * Callout
 * A simple "info box" block node. Renders as:
 *   <div class="editor-callout" data-variant="info">...content...</div>
 *
 * Usage:
 *   editor.chain().focus().setCallout("info").run();
 *   editor.chain().focus().setCallout("warning").run();
 *   editor.chain().focus().unsetCallout().run();
 */
export const Callout = Node.create({
  name: "callout",
  group: "block",
  content: "block+",
  defining: true,
  isolating: true,

  addAttributes() {
    return {
      variant: {
        default: "info", // info | warning | success | danger
        parseHTML: (element) => element.getAttribute("data-variant") || "info",
        renderHTML: (attributes) => ({ "data-variant": attributes.variant }),
      },
    };
  },

  parseHTML() {
    return [{ tag: 'div[data-type="callout"]' }];
  },

  renderHTML({ HTMLAttributes }) {
    return [
      "div",
      mergeAttributes(HTMLAttributes, {
        "data-type": "callout",
        class: "editor-callout",
      }),
      0,
    ];
  },

  addCommands() {
    return {
      setCallout:
        (variant = "info") =>
        ({ commands }) => {
          return commands.wrapIn(this.name, { variant });
        },
      unsetCallout:
        () =>
        ({ commands }) => {
          return commands.lift(this.name);
        },
    };
  },
});

export default Callout;

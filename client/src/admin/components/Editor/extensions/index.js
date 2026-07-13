import StarterKit from "@tiptap/starter-kit";
import Link from "@tiptap/extension-link";
import TextAlign from "@tiptap/extension-text-align";
import { TextStyleKit } from "@tiptap/extension-text-style";
import Highlight from "@tiptap/extension-highlight";
import Subscript from "@tiptap/extension-subscript";
import Superscript from "@tiptap/extension-superscript";
import { TaskList, TaskItem } from "@tiptap/extension-list";
import { TableKit } from "@tiptap/extension-table";
import { Placeholder, CharacterCount } from "@tiptap/extensions";

import Indent from "./Indent";
import Callout from "./Callout";
import ResizableImage from "./ResizableImage.jsx";

/**
 * getExtensions
 * Returns the full extension list for the editor. Written for Tiptap v3:
 * - StarterKit already bundles Underline + Link + ListKeymap + the base
 *   lists (bulletList/orderedList/listItem), so we only disable its
 *   built-in `link` (we configure our own below) and leave the rest on.
 * - TextStyleKit bundles TextStyle + Color + FontFamily + FontSize in one
 *   extension (replaces the old separate Color/FontFamily/custom-FontSize
 *   setup).
 * - TableKit bundles Table + TableRow + TableCell + TableHeader.
 * - Placeholder/CharacterCount now live in the shared `@tiptap/extensions`
 *   package.
 *
 * @param {object} opts
 * @param {number} opts.characterLimit - optional max character count (null = unlimited)
 */
export function getExtensions({ characterLimit = null } = {}) {
  return [
    StarterKit.configure({
      heading: { levels: [1, 2, 3, 4] },
      link: false, // we configure Link ourselves below (openOnClick, rel, etc.)
    }),

    Subscript,
    Superscript,

    Link.configure({
      openOnClick: false,
      autolink: true,
      HTMLAttributes: {
        rel: "noopener noreferrer",
      },
    }),

    ResizableImage,

    TextAlign.configure({
      types: ["heading", "paragraph"],
    }),
    Indent,

    TextStyleKit.configure({
      color: { types: ["textStyle"] },
      fontFamily: { types: ["textStyle"] },
      fontSize: { types: ["textStyle"] },
    }),
    Highlight.configure({ multicolor: true }),

    TaskList,
    TaskItem.configure({ nested: true }),

    TableKit.configure({
      table: {
        resizable: true,
        HTMLAttributes: { class: "editor-table" },
      },
    }),

    Callout,

    Placeholder.configure({
      placeholder: "Start writing your product content...",
    }),

    CharacterCount.configure({
      limit: characterLimit,
    }),
  ];
}

export default getExtensions;
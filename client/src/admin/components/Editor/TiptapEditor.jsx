import React, { useMemo, useEffect } from "react";
import { useEditor, EditorContent } from "@tiptap/react";

import { getExtensions } from "./extensions";
import Toolbar from "./toolbar/Toolbar";
import "./Editor.css";

/**
 * Reads a File as a base64 data URL. Used only as a fallback when no
 * `onImageUpload` prop is supplied, so the editor still works out of
 * the box. Swap in your real Cloudinary/S3 upload for production use.
 */
function readFileAsDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

/**
 * Strips the worst of Microsoft Word / Google Docs cruft (mso- inline
 * styles, empty spans, XML namespaces, class="Mso*") from pasted HTML
 * before Tiptap parses it, without touching normal web paste.
 */
function cleanPastedHtml(html) {
  return html
    .replace(/<!--[\s\S]*?-->/g, "")
    .replace(/<o:p>[\s\S]*?<\/o:p>/g, "")
    .replace(/\sclass="Mso[^"]*"/g, "")
    .replace(/\sstyle="[^"]*mso-[^"]*"/gi, "")
    .replace(/<span[^>]*>(\s|&nbsp;)*<\/span>/g, "");
}

/**
 * TiptapEditor
 * Drop-in replacement for the original component. Same `value`/`onChange`
 * contract, plus optional props for image upload and character limits.
 *
 * @param {string} value - initial/controlled HTML content
 * @param {function} onChange - (html) => void, called on every update
 * @param {function} [onImageUpload] - async (file) => url. Wire this to
 *        your existing Cloudinary upload endpoint. Falls back to inline
 *        base64 if omitted (fine for dev, not recommended for production).
 * @param {number} [characterLimit] - optional max character count
 */
export default function TiptapEditor({
  value,
  onChange,
  onImageUpload,
  characterLimit = null,
}) {
  const extensions = useMemo(
    () => getExtensions({ characterLimit }),
    [characterLimit]
  );

  const uploadImage = useMemo(
    () =>
      onImageUpload ||
      (async (file) => {
        // eslint-disable-next-line no-console
        console.warn(
          "TiptapEditor: no onImageUpload prop provided - falling back to base64. " +
            "Pass onImageUpload={(file) => yourUploadFn(file)} to use Cloudinary/S3."
        );
        return readFileAsDataUrl(file);
      }),
    [onImageUpload]
  );

  const editor = useEditor({
    extensions,
    content: value,
    // Required in Tiptap v3: without this, editor.isActive() checks in the
    // toolbar (bold/italic/heading highlighting, etc.) won't re-render on
    // selection changes.
    shouldRerenderOnTransaction: true,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
    editorProps: {
      attributes: {
        class: "editor-content-area",
      },
      // Better paste from Word / websites: strip mso-cruft before Tiptap
      // parses the HTML, while leaving normal formatting intact.
      transformPastedHTML(html) {
        return cleanPastedHtml(html);
      },
      // Paste image directly from clipboard
      handlePaste(view, event) {
        const items = Array.from(event.clipboardData?.items || []);
        const imageItem = items.find((item) => item.type.startsWith("image/"));
        if (!imageItem) return false;

        const file = imageItem.getAsFile();
        if (!file) return false;

        event.preventDefault();
        uploadImage(file).then((url) => {
          if (!url) return;
          const { schema } = view.state;
          const node = schema.nodes.image.create({ src: url, align: "center" });
          const transaction = view.state.tr.replaceSelectionWith(node);
          view.dispatch(transaction);
        });
        return true;
      },
      // Drag-and-drop image upload
      handleDrop(view, event) {
        const files = Array.from(event.dataTransfer?.files || []);
        const imageFile = files.find((f) => f.type.startsWith("image/"));
        if (!imageFile) return false;

        event.preventDefault();
        const coords = view.posAtCoords({
          left: event.clientX,
          top: event.clientY,
        });

        uploadImage(imageFile).then((url) => {
          if (!url) return;
          const { schema } = view.state;
          const node = schema.nodes.image.create({ src: url, align: "center" });
          const transaction = view.state.tr.insert(coords?.pos ?? 0, node);
          view.dispatch(transaction);
        });
        return true;
      },
    },
  });

  useEffect(() => {
  if (!editor) return;

  const incoming = value || "";
  const current = editor.getHTML();

  if (incoming !== current) {
    editor.commands.setContent(incoming, false);
  }
}, [value, editor]);

  if (!editor) return null;

  return (
    <div className="editor-wrapper">
      <Toolbar editor={editor} onImageUpload={uploadImage} />
      <EditorContent editor={editor} />
      {characterLimit && (
        <div className="editor-limit-warning">
          {editor.storage.characterCount.characters()} / {characterLimit} characters
        </div>
      )}
    </div>
  );
}

import React, { useRef } from "react";
import {
  FaImage,
  FaAlignLeft,
  FaAlignCenter,
  FaAlignRight,
  FaExchangeAlt,
  FaTrash,
} from "react-icons/fa";
import ToolbarButton from "./ToolbarButton";

/**
 * ImageMenu
 * - Upload button opens a file picker and delegates the actual upload
 *   (e.g. to Cloudinary) via the `onImageUpload` prop, keeping this
 *   component decoupled from your backend.
 * - Align / replace / delete act on the currently selected image node.
 *
 * @param {function} onImageUpload - async (file) => url
 */
export default function ImageMenu({ editor, onImageUpload }) {
  const fileInputRef = useRef(null);
  const isImageSelected = editor.isActive("image");

  const handleFile = async (file, mode = "insert") => {
    if (!file || !onImageUpload) return;
    const url = await onImageUpload(file);
    if (!url) return;

    if (mode === "insert") {
      editor.chain().focus().setImage({ src: url, align: "center" }).run();
    } else {
      editor.chain().focus().replaceImageSrc(url).run();
    }
  };

  return (
    <>
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        hidden
        onChange={(e) => {
          const file = e.target.files?.[0];
          handleFile(file, fileInputRef.current.dataset.mode);
          e.target.value = "";
        }}
      />

      <ToolbarButton
        icon={<FaImage />}
        label="Insert image"
        onClick={() => {
          fileInputRef.current.dataset.mode = "insert";
          fileInputRef.current.click();
        }}
      />

      {isImageSelected && (
        <>
          <ToolbarButton
            icon={<FaAlignLeft />}
            label="Align image left"
            isActive={editor.getAttributes("image").align === "left"}
            onClick={() => editor.chain().focus().setImageAlign("left").run()}
          />
          <ToolbarButton
            icon={<FaAlignCenter />}
            label="Align image center"
            isActive={editor.getAttributes("image").align === "center"}
            onClick={() => editor.chain().focus().setImageAlign("center").run()}
          />
          <ToolbarButton
            icon={<FaAlignRight />}
            label="Align image right"
            isActive={editor.getAttributes("image").align === "right"}
            onClick={() => editor.chain().focus().setImageAlign("right").run()}
          />
          <ToolbarButton
            icon={<FaExchangeAlt />}
            label="Replace image"
            onClick={() => {
              fileInputRef.current.dataset.mode = "replace";
              fileInputRef.current.click();
            }}
          />
          <ToolbarButton
            icon={<FaTrash />}
            label="Delete image"
            onClick={() => editor.chain().focus().deleteSelection().run()}
          />
        </>
      )}
    </>
  );
}

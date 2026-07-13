import React from "react";
import {
  FaBold,
  FaItalic,
  FaUnderline,
  FaStrikethrough,
  FaSuperscript,
  FaSubscript,
  FaRemoveFormat,
  FaListUl,
  FaListOl,
  FaTasks,
  FaAlignLeft,
  FaAlignCenter,
  FaAlignRight,
  FaAlignJustify,
  FaIndent,
  FaOutdent,
  FaQuoteRight,
  FaCode,
  FaGripLines,
  FaInfoCircle,
  FaUndo,
  FaRedo,
} from "react-icons/fa";

import ToolbarButton from "./ToolbarButton";
import ToolbarDropdown from "./ToolbarDropdown";
import ColorPicker from "./ColorPicker";
import LinkMenu from "./LinkMenu";
import ImageMenu from "./ImageMenu";
import TableMenu from "./TableMenu";
import TemplateMenu from "./TemplateMenu";
import useWordCount from "../hooks/useWordCount";

const HEADING_OPTIONS = [
  { label: "Paragraph", level: 0 },
  { label: "Heading 1", level: 1 },
  { label: "Heading 2", level: 2 },
  { label: "Heading 3", level: 3 },
  { label: "Heading 4", level: 4 },
];

const FONT_FAMILIES = [
  { label: "Default", value: null },
  { label: "Sans Serif", value: "Arial, sans-serif" },
  { label: "Serif", value: "Georgia, serif" },
  { label: "Monospace", value: "'Courier New', monospace" },
  { label: "Poppins", value: "Poppins, sans-serif" },
  { label: "Inter", value: "Inter, sans-serif" },
];

const FONT_SIZES = ["12px", "14px", "16px", "18px", "20px", "24px", "28px", "32px"];

export default function Toolbar({ editor, onImageUpload }) {
  const { words, characters } = useWordCount(editor);

  if (!editor) return null;

  const currentHeadingLabel =
    HEADING_OPTIONS.find(
      (h) => h.level !== 0 && editor.isActive("heading", { level: h.level })
    )?.label || "Paragraph";

  return (
    <div className="editor-toolbar">
      <div className="editor-toolbar-scroll">
        {/* History */}
        <div className="toolbar-group">
          <ToolbarButton
            icon={<FaUndo />}
            label="Undo"
            shortcut="Ctrl+Z"
            onClick={() => editor.chain().focus().undo().run()}
            disabled={!editor.can().undo()}
          />
          <ToolbarButton
            icon={<FaRedo />}
            label="Redo"
            shortcut="Ctrl+Y"
            onClick={() => editor.chain().focus().redo().run()}
            disabled={!editor.can().redo()}
          />
        </div>

        {/* Heading */}
        <div className="toolbar-group">
          <ToolbarDropdown label={currentHeadingLabel} tooltip="Text style" width={160}>
            {({ close }) =>
              HEADING_OPTIONS.map((h) => (
                <button
                  key={h.label}
                  type="button"
                  className="dropdown-item"
                  onClick={() => {
                    h.level === 0
                      ? editor.chain().focus().setParagraph().run()
                      : editor.chain().focus().toggleHeading({ level: h.level }).run();
                    close();
                  }}
                >
                  {h.label}
                </button>
              ))
            }
          </ToolbarDropdown>

          <ToolbarDropdown label="Font" tooltip="Font family" width={160}>
            {({ close }) =>
              FONT_FAMILIES.map((f) => (
                <button
                  key={f.label}
                  type="button"
                  className="dropdown-item"
                  style={{ fontFamily: f.value || "inherit" }}
                  onClick={() => {
                    f.value
                      ? editor.chain().focus().setFontFamily(f.value).run()
                      : editor.chain().focus().unsetFontFamily().run();
                    close();
                  }}
                >
                  {f.label}
                </button>
              ))
            }
          </ToolbarDropdown>

          <ToolbarDropdown label="Size" tooltip="Font size" width={100}>
            {({ close }) =>
              FONT_SIZES.map((size) => (
                <button
                  key={size}
                  type="button"
                  className="dropdown-item"
                  onClick={() => {
                    editor.chain().focus().setFontSize(size).run();
                    close();
                  }}
                >
                  {size}
                </button>
              ))
            }
          </ToolbarDropdown>
        </div>

        {/* Text formatting */}
        <div className="toolbar-group">
          <ToolbarButton icon={<FaBold />} label="Bold" shortcut="Ctrl+B" isActive={editor.isActive("bold")} onClick={() => editor.chain().focus().toggleBold().run()} />
          <ToolbarButton icon={<FaItalic />} label="Italic" shortcut="Ctrl+I" isActive={editor.isActive("italic")} onClick={() => editor.chain().focus().toggleItalic().run()} />
          <ToolbarButton icon={<FaUnderline />} label="Underline" shortcut="Ctrl+U" isActive={editor.isActive("underline")} onClick={() => editor.chain().focus().toggleUnderline().run()} />
          <ToolbarButton icon={<FaStrikethrough />} label="Strikethrough" isActive={editor.isActive("strike")} onClick={() => editor.chain().focus().toggleStrike().run()} />
          <ToolbarButton icon={<FaSuperscript />} label="Superscript" isActive={editor.isActive("superscript")} onClick={() => editor.chain().focus().toggleSuperscript().run()} />
          <ToolbarButton icon={<FaSubscript />} label="Subscript" isActive={editor.isActive("subscript")} onClick={() => editor.chain().focus().toggleSubscript().run()} />
          <ToolbarButton icon={<FaRemoveFormat />} label="Clear formatting" onClick={() => editor.chain().focus().clearNodes().unsetAllMarks().run()} />
        </div>

        {/* Color */}
        <div className="toolbar-group">
          <ColorPicker editor={editor} />
        </div>

        {/* Lists */}
        <div className="toolbar-group">
          <ToolbarButton icon={<FaListUl />} label="Bullet list" isActive={editor.isActive("bulletList")} onClick={() => editor.chain().focus().toggleBulletList().run()} />
          <ToolbarButton icon={<FaListOl />} label="Numbered list" isActive={editor.isActive("orderedList")} onClick={() => editor.chain().focus().toggleOrderedList().run()} />
          <ToolbarButton icon={<FaTasks />} label="Task list" isActive={editor.isActive("taskList")} onClick={() => editor.chain().focus().toggleTaskList().run()} />
          <ToolbarButton icon={<FaOutdent />} label="Decrease indent" onClick={() => editor.chain().focus().decreaseIndent().run()} />
          <ToolbarButton icon={<FaIndent />} label="Increase indent" onClick={() => editor.chain().focus().increaseIndent().run()} />
        </div>

        {/* Alignment */}
        <div className="toolbar-group">
          <ToolbarButton icon={<FaAlignLeft />} label="Align left" isActive={editor.isActive({ textAlign: "left" })} onClick={() => editor.chain().focus().setTextAlign("left").run()} />
          <ToolbarButton icon={<FaAlignCenter />} label="Align center" isActive={editor.isActive({ textAlign: "center" })} onClick={() => editor.chain().focus().setTextAlign("center").run()} />
          <ToolbarButton icon={<FaAlignRight />} label="Align right" isActive={editor.isActive({ textAlign: "right" })} onClick={() => editor.chain().focus().setTextAlign("right").run()} />
          <ToolbarButton icon={<FaAlignJustify />} label="Justify" isActive={editor.isActive({ textAlign: "justify" })} onClick={() => editor.chain().focus().setTextAlign("justify").run()} />
        </div>

        {/* Links & Images */}
        <div className="toolbar-group">
          <LinkMenu editor={editor} />
          <ImageMenu editor={editor} onImageUpload={onImageUpload} />
        </div>

        {/* Table */}
        <div className="toolbar-group">
          <TableMenu editor={editor} />
        </div>

        {/* Blocks */}
        <div className="toolbar-group">
          <ToolbarButton icon={<FaQuoteRight />} label="Blockquote" isActive={editor.isActive("blockquote")} onClick={() => editor.chain().focus().toggleBlockquote().run()} />
          <ToolbarButton icon={<FaCode />} label="Code block" isActive={editor.isActive("codeBlock")} onClick={() => editor.chain().focus().toggleCodeBlock().run()} />
          <ToolbarButton icon={<FaGripLines />} label="Horizontal rule" onClick={() => editor.chain().focus().setHorizontalRule().run()} />
          <ToolbarButton icon={<FaInfoCircle />} label="Info box" isActive={editor.isActive("callout")} onClick={() => editor.chain().focus().setCallout("info").run()} />
        </div>

        {/* Templates */}
        <div className="toolbar-group">
          <TemplateMenu editor={editor} />
        </div>
      </div>

      <div className="editor-toolbar-meta">
        {words} words · {characters} characters
      </div>
    </div>
  );
}

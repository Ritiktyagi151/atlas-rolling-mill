import React from "react";
import ToolbarDropdown from "./ToolbarDropdown";

const TEXT_COLORS = [
  "#000000", "#374151", "#DC2626", "#EA580C", "#D97706",
  "#65A30D", "#059669", "#0891B2", "#2563EB", "#7C3AED", "#DB2777",
];

const HIGHLIGHT_COLORS = [
  "#FEF3C7", "#FDE68A", "#FECACA", "#BBF7D0", "#BFDBFE",
  "#DDD6FE", "#FBCFE8", "#E5E7EB",
];

/**
 * ColorPicker
 * Two dropdowns: text color and highlight color, each with a swatch grid
 * and a native <input type="color"> for custom colors.
 */
export default function ColorPicker({ editor }) {
  return (
    <>
      <ToolbarDropdown label="A" tooltip="Text color" width={180}>
        {({ close }) => (
          <div className="color-grid">
            {TEXT_COLORS.map((color) => (
              <button
                key={color}
                type="button"
                className="color-swatch"
                style={{ backgroundColor: color }}
                onClick={() => {
                  editor.chain().focus().setColor(color).run();
                  close();
                }}
              />
            ))}
            <label className="color-swatch custom-color">
              +
              <input
                type="color"
                onChange={(e) => {
                  editor.chain().focus().setColor(e.target.value).run();
                }}
              />
            </label>
            <button
              type="button"
              className="dropdown-item"
              onClick={() => {
                editor.chain().focus().unsetColor().run();
                close();
              }}
            >
              Reset color
            </button>
          </div>
        )}
      </ToolbarDropdown>

      <ToolbarDropdown label="H" tooltip="Highlight color" width={180}>
        {({ close }) => (
          <div className="color-grid">
            {HIGHLIGHT_COLORS.map((color) => (
              <button
                key={color}
                type="button"
                className="color-swatch"
                style={{ backgroundColor: color }}
                onClick={() => {
                  editor.chain().focus().toggleHighlight({ color }).run();
                  close();
                }}
              />
            ))}
            <button
              type="button"
              className="dropdown-item"
              onClick={() => {
                editor.chain().focus().unsetHighlight().run();
                close();
              }}
            >
              Remove highlight
            </button>
          </div>
        )}
      </ToolbarDropdown>
    </>
  );
}

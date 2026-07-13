import React from "react";
import { FaShapes } from "react-icons/fa";
import ToolbarDropdown from "./ToolbarDropdown";
import { getTemplatesByCategory } from "../templates/templates";

/**
 * TemplateMenu
 * One-click insertion of reusable content blocks. Content stays fully
 * editable after insert since it's parsed into real Tiptap nodes.
 */
export default function TemplateMenu({ editor }) {
  const grouped = getTemplatesByCategory();

  return (
    <ToolbarDropdown label={<FaShapes />} tooltip="Insert template" width={240}>
      {({ close }) =>
        Object.entries(grouped).map(([category, templates]) => (
          <div key={category} className="dropdown-group">
            <div className="dropdown-group-label">{category}</div>
            {templates.map((tpl) => (
              <button
                key={tpl.id}
                type="button"
                className="dropdown-item"
                onClick={() => {
                  editor.chain().focus().insertContent(tpl.html).run();
                  close();
                }}
              >
                {tpl.label}
              </button>
            ))}
          </div>
        ))
      }
    </ToolbarDropdown>
  );
}

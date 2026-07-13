import React, { useEffect, useState } from "react";
import { FaLink, FaExternalLinkAlt, FaUnlink } from "react-icons/fa";
import ToolbarDropdown from "./ToolbarDropdown";
import ToolbarButton from "./ToolbarButton";

/**
 * LinkMenu
 * Insert or edit a link, with an "open in new tab" toggle, plus a
 * separate button to remove an existing link.
 */
export default function LinkMenu({ editor }) {
  const [url, setUrl] = useState("");
  const [openInNewTab, setOpenInNewTab] = useState(true);

  useEffect(() => {
    const prevAttrs = editor.getAttributes("link");
    setUrl(prevAttrs.href || "");
    setOpenInNewTab(prevAttrs.target === "_blank");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [editor.state.selection]);

  const applyLink = (close) => {
    if (!url) {
      editor.chain().focus().unsetLink().run();
      close();
      return;
    }
    editor
      .chain()
      .focus()
      .extendMarkRange("link")
      .setLink({
        href: url,
        target: openInNewTab ? "_blank" : null,
      })
      .run();
    close();
  };

  return (
    <>
      <ToolbarDropdown
        label={<FaLink />}
        tooltip="Insert / edit link"
        width={260}
      >
        {({ close }) => (
          <div className="link-menu-panel">
            <input
              type="url"
              placeholder="https://example.com"
              value={url}
              autoFocus
              onChange={(e) => setUrl(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && applyLink(close)}
            />
            <label className="link-menu-checkbox">
              <input
                type="checkbox"
                checked={openInNewTab}
                onChange={(e) => setOpenInNewTab(e.target.checked)}
              />
              <FaExternalLinkAlt size={11} /> Open in new tab
            </label>
            <button
              type="button"
              className="dropdown-item primary"
              onClick={() => applyLink(close)}
            >
              Apply link
            </button>
          </div>
        )}
      </ToolbarDropdown>

      <ToolbarButton
        icon={<FaUnlink />}
        label="Remove link"
        disabled={!editor.isActive("link")}
        onClick={() => editor.chain().focus().unsetLink().run()}
      />
    </>
  );
}

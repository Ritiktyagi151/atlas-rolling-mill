import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { FaChevronDown } from "react-icons/fa";

/**
 * ToolbarDropdown
 * Generic dropdown used for headings, font family/size, table menu,
 * template menu, etc.
 *
 * The menu is rendered through a portal into document.body and positioned
 * with `fixed` coordinates. This is required because the toolbar row uses
 * `overflow-x: auto` (for horizontal scrolling on small screens), and any
 * browser that scrolls one axis clips the other too — so a menu nested
 * inside that row would get invisibly cut off instead of opening.
 */
export default function ToolbarDropdown({ label, tooltip, children, width = 200 }) {
  const [open, setOpen] = useState(false);
  const [coords, setCoords] = useState({ top: 0, left: 0 });
  const triggerRef = useRef(null);
  const menuRef = useRef(null);

  const openMenu = () => {
    const rect = triggerRef.current?.getBoundingClientRect();
    if (rect) {
      setCoords({ top: rect.bottom + 6, left: rect.left });
    }
    setOpen((o) => !o);
  };

  useEffect(() => {
    if (!open) return;

    function handleClick(e) {
      if (
        triggerRef.current?.contains(e.target) ||
        menuRef.current?.contains(e.target)
      ) {
        return;
      }
      setOpen(false);
    }
    function handleEscape(e) {
      if (e.key === "Escape") setOpen(false);
    }
    function handleReposition() {
      const rect = triggerRef.current?.getBoundingClientRect();
      if (rect) setCoords({ top: rect.bottom + 6, left: rect.left });
    }

    document.addEventListener("mousedown", handleClick);
    document.addEventListener("keydown", handleEscape);
    window.addEventListener("scroll", handleReposition, true);
    window.addEventListener("resize", handleReposition);
    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("keydown", handleEscape);
      window.removeEventListener("scroll", handleReposition, true);
      window.removeEventListener("resize", handleReposition);
    };
  }, [open]);

  return (
    <div className="toolbar-dropdown">
      <button
        type="button"
        ref={triggerRef}
        className={`toolbar-btn dropdown-trigger${open ? " active" : ""}`}
        onClick={openMenu}
        data-tooltip={tooltip || label}
      >
        <span>{label}</span>
        <FaChevronDown size={10} />
      </button>

      {open &&
        createPortal(
          <div
            ref={menuRef}
            className="toolbar-dropdown-menu"
            style={{
              position: "fixed",
              top: coords.top,
              left: coords.left,
              minWidth: width,
            }}
          >
            {typeof children === "function"
              ? children({ close: () => setOpen(false) })
              : children}
          </div>,
          document.body
        )}
    </div>
  );
}

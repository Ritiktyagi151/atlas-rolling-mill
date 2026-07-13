import React from "react";

/**
 * ToolbarButton
 * Reusable icon button used across the toolbar. Handles active state,
 * disabled state, and a lightweight CSS tooltip (no extra dependency).
 */
export default function ToolbarButton({
  icon,
  label,
  onClick,
  isActive = false,
  disabled = false,
  shortcut,
}) {
  return (
    <button
      type="button"
      className={`toolbar-btn${isActive ? " active" : ""}`}
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
      aria-pressed={isActive}
      data-tooltip={shortcut ? `${label} (${shortcut})` : label}
    >
      {icon}
    </button>
  );
}

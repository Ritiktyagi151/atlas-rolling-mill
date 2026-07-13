import React from "react";
import { FaTable } from "react-icons/fa";
import ToolbarDropdown from "./ToolbarDropdown";

/**
 * TableMenu
 * Single dropdown holding every table action. Actions that only make
 * sense inside an existing table are disabled until the cursor is in one.
 */
export default function TableMenu({ editor }) {
  const inTable = editor.isActive("table");

  const actions = [
    {
      label: "Insert table",
      run: () =>
        editor
          .chain()
          .focus()
          .insertTable({ rows: 3, cols: 3, withHeaderRow: true })
          .run(),
      always: true,
    },
    { divider: true, requiresTable: true },
    {
      label: "Add row above",
      run: () => editor.chain().focus().addRowBefore().run(),
      requiresTable: true,
    },
    {
      label: "Add row below",
      run: () => editor.chain().focus().addRowAfter().run(),
      requiresTable: true,
    },
    {
      label: "Delete row",
      run: () => editor.chain().focus().deleteRow().run(),
      requiresTable: true,
    },
    { divider: true, requiresTable: true },
    {
      label: "Add column left",
      run: () => editor.chain().focus().addColumnBefore().run(),
      requiresTable: true,
    },
    {
      label: "Add column right",
      run: () => editor.chain().focus().addColumnAfter().run(),
      requiresTable: true,
    },
    {
      label: "Delete column",
      run: () => editor.chain().focus().deleteColumn().run(),
      requiresTable: true,
    },
    { divider: true, requiresTable: true },
    {
      label: "Merge cells",
      run: () => editor.chain().focus().mergeCells().run(),
      requiresTable: true,
    },
    {
      label: "Split cell",
      run: () => editor.chain().focus().splitCell().run(),
      requiresTable: true,
    },
    { divider: true, requiresTable: true },
    {
      label: "Toggle header row",
      run: () => editor.chain().focus().toggleHeaderRow().run(),
      requiresTable: true,
    },
    {
      label: "Toggle header column",
      run: () => editor.chain().focus().toggleHeaderColumn().run(),
      requiresTable: true,
    },
    { divider: true, requiresTable: true },
    {
      label: "Delete table",
      run: () => editor.chain().focus().deleteTable().run(),
      requiresTable: true,
      danger: true,
    },
  ];

  return (
    <ToolbarDropdown label={<FaTable />} tooltip="Table" width={200}>
      {({ close }) =>
        actions.map((action, i) => {
          if (action.divider) {
            if (action.requiresTable && !inTable) return null;
            return <div key={`div-${i}`} className="dropdown-divider" />;
          }
          const disabled = action.requiresTable && !inTable;
          return (
            <button
              key={action.label}
              type="button"
              className={`dropdown-item${action.danger ? " danger" : ""}`}
              disabled={disabled}
              onClick={() => {
                action.run();
                close();
              }}
            >
              {action.label}
            </button>
          );
        })
      }
    </ToolbarDropdown>
  );
}

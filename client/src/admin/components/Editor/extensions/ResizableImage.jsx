import { Node, mergeAttributes } from "@tiptap/core";
import { ReactNodeViewRenderer, NodeViewWrapper } from "@tiptap/react";
import { useCallback, useRef, useState } from "react";

/* ----------------------------------------------------------------------- */
/*  React NodeView: renders the <img>, resize handle, and caption input    */
/* ----------------------------------------------------------------------- */
function ResizableImageComponent({ node, updateAttributes, selected }) {
  const { src, alt, title, width, align, caption } = node.attrs;
  const imgRef = useRef(null);
  const [resizing, setResizing] = useState(false);

  const startResize = useCallback(
    (e) => {
      e.preventDefault();
      const startX = e.clientX;
      const startWidth = imgRef.current?.offsetWidth || 300;
      setResizing(true);

      const onMouseMove = (moveEvent) => {
        const delta = moveEvent.clientX - startX;
        const newWidth = Math.max(80, startWidth + delta);
        updateAttributes({ width: `${newWidth}px` });
      };

      const onMouseUp = () => {
        setResizing(false);
        window.removeEventListener("mousemove", onMouseMove);
        window.removeEventListener("mouseup", onMouseUp);
      };

      window.addEventListener("mousemove", onMouseMove);
      window.addEventListener("mouseup", onMouseUp);
    },
    [updateAttributes]
  );

  return (
    <NodeViewWrapper
      className={`editor-image-wrapper align-${align || "center"}${
        selected ? " is-selected" : ""
      }`}
    >
      <figure style={{ width: width || "auto" }}>
        <div className="editor-image-inner">
          <img
            ref={imgRef}
            src={src}
            alt={alt || ""}
            title={title || ""}
            style={{ width: width || "auto" }}
            draggable={false}
          />
          {selected && (
            <span
              className={`editor-image-resize-handle${resizing ? " active" : ""}`}
              onMouseDown={startResize}
            />
          )}
        </div>
        <figcaption
          contentEditable
          suppressContentEditableWarning
          data-placeholder="Add a caption..."
          onBlur={(e) =>
            updateAttributes({ caption: e.currentTarget.textContent || "" })
          }
        >
          {caption || ""}
        </figcaption>
      </figure>
    </NodeViewWrapper>
  );
}

/* ----------------------------------------------------------------------- */
/*  Node definition                                                        */
/* ----------------------------------------------------------------------- */
export const ResizableImage = Node.create({
  name: "image",
  group: "block",
  atom: true,
  draggable: true,

  addOptions() {
    return {
      HTMLAttributes: {},
    };
  },

  addAttributes() {
    return {
      src: { default: null },
      alt: { default: null },
      title: { default: null },
      width: { default: null },
      align: { default: "center" }, // left | center | right
      caption: { default: "" },
    };
  },

  parseHTML() {
    return [
      {
        tag: "figure[data-type='editor-image']",
        getAttrs: (el) => {
          const img = el.querySelector("img");
          const figcaption = el.querySelector("figcaption");
          return {
            src: img?.getAttribute("src"),
            alt: img?.getAttribute("alt"),
            title: img?.getAttribute("title"),
            width: img?.style.width || null,
            align: el.getAttribute("data-align") || "center",
            caption: figcaption?.textContent || "",
          };
        },
      },
      { tag: "img[src]" },
    ];
  },

  renderHTML({ HTMLAttributes, node }) {
    const { src, alt, title, width, align, caption } = node.attrs;
    const imgAttrs = mergeAttributes(this.options.HTMLAttributes, {
      src,
      alt,
      title,
      style: width ? `width: ${width}` : undefined,
    });

    return [
      "figure",
      { "data-type": "editor-image", "data-align": align, class: `align-${align}` },
      ["img", imgAttrs],
      caption ? ["figcaption", {}, caption] : ["figcaption", {}],
    ];
  },

  addNodeView() {
    return ReactNodeViewRenderer(ResizableImageComponent);
  },

  addCommands() {
    return {
      setImage:
        (attrs) =>
        ({ commands }) => {
          return commands.insertContent({ type: this.name, attrs });
        },
      setImageAlign:
        (align) =>
        ({ commands }) => {
          return commands.updateAttributes(this.name, { align });
        },
      replaceImageSrc:
        (src) =>
        ({ commands }) => {
          return commands.updateAttributes(this.name, { src });
        },
    };
  },
});

export default ResizableImage;

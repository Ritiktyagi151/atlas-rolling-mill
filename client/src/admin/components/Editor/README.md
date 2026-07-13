# Enhanced Tiptap Editor

Drop-in replacement for your existing `TiptapEditor.jsx`. Same `value` /
`onChange` API, so nothing else in your app needs to change.

## 1. Install the new dependencies

Your project already has `@tiptap/react`, `@tiptap/starter-kit`,
`@tiptap/extension-underline`, `@tiptap/extension-link`,
`@tiptap/extension-image`, `@tiptap/extension-text-align`. Add the rest:

```bash
npm install \
  @tiptap/extension-text-style \
  @tiptap/extension-color \
  @tiptap/extension-font-family \
  @tiptap/extension-highlight \
  @tiptap/extension-subscript \
  @tiptap/extension-superscript \
  @tiptap/extension-task-list \
  @tiptap/extension-task-item \
  @tiptap/extension-table \
  @tiptap/extension-table-row \
  @tiptap/extension-table-cell \
  @tiptap/extension-table-header \
  @tiptap/extension-placeholder \
  @tiptap/extension-character-count
```

`@tiptap/extension-image` is no longer used directly — it's replaced by the
custom `ResizableImage` node (resize/align/caption support), but you can
leave the package installed, it's harmless.

## 2. Copy the files

Copy the whole `src/components/Editor/` folder into your project, replacing
your existing editor folder (or renaming as needed to match your structure):

```
src/components/Editor/
├── TiptapEditor.jsx          ← main component (replaces your old file)
├── Editor.css
├── extensions/
│   ├── index.js               ← extension registry
│   ├── FontSize.js
│   ├── Indent.js
│   ├── Callout.js
│   └── ResizableImage.jsx
├── toolbar/
│   ├── Toolbar.jsx
│   ├── ToolbarButton.jsx
│   ├── ToolbarDropdown.jsx
│   ├── ColorPicker.jsx
│   ├── LinkMenu.jsx
│   ├── ImageMenu.jsx
│   ├── TableMenu.jsx
│   └── TemplateMenu.jsx
├── templates/
│   └── templates.js           ← add new templates here, one object each
└── hooks/
    └── useWordCount.js
```

## 3. Wire up image upload (recommended)

The editor works out of the box (falls back to base64), but for production
pass your existing Cloudinary upload function:

```jsx
import TiptapEditor from "./components/Editor/TiptapEditor";
import { uploadImageToCloudinary } from "../services/uploadService";

<TiptapEditor
  value={content}
  onChange={setContent}
  onImageUpload={async (file) => {
    const url = await uploadImageToCloudinary(file);
    return url;
  }}
/>
```

This same function is used for the toolbar upload button, drag-and-drop, and
clipboard paste — one place to wire your backend.

## 4. Optional: character limit

```jsx
<TiptapEditor value={content} onChange={setContent} characterLimit={5000} />
```

## What changed vs. the old editor

- Nothing was removed. Bold, italic, underline, headings, lists,
  blockquote, alignment, link, and image all still work the same way.
- Toolbar is now grouped, scrollable/responsive, sticky while scrolling,
  and every button has a tooltip.
- Added: strike, superscript/subscript, clear formatting, H4, task lists,
  indent/outdent, full table editing (insert/merge/split/header
  row+column/delete), image resize/align/caption/replace/drag-drop/paste,
  link "open in new tab", code block, horizontal rule, callout/info boxes,
  text color + highlight, font family + size, undo/redo buttons, live
  word/character count, one-click content templates, better paste from
  Word/websites.
- No Redux, no TypeScript, no backend/schema changes required — the editor
  still just emits `onChange(html)`.

## Adding a new template

Open `templates/templates.js` and push a new object:

```js
{
  id: "warranty-block",
  label: "Warranty information",
  category: "Product",
  html: `<h3>Warranty</h3><p>Describe warranty terms here.</p>`,
}
```

It appears in the toolbar's template dropdown immediately — no other code
changes needed. Later, if you want templates to come from the CMS instead of
being hardcoded, replace the body of `getTemplatesByCategory()` with a fetch
call to your backend; `TemplateMenu.jsx` doesn't need to change.

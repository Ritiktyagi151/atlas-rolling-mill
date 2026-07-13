import { useEffect, useState } from "react";

/**
 * useWordCount
 * Reads live word/character counts from the CharacterCount extension.
 * Re-renders only this small hook's consumer on update, not the whole editor.
 */
export function useWordCount(editor) {
  const [counts, setCounts] = useState({ words: 0, characters: 0 });

  useEffect(() => {
    if (!editor) return;

    const update = () => {
      const storage = editor.storage.characterCount;
      if (!storage) return;
      setCounts({
        words: storage.words(),
        characters: storage.characters(),
      });
    };

    update();
    editor.on("update", update);
    editor.on("selectionUpdate", update);

    return () => {
      editor.off("update", update);
      editor.off("selectionUpdate", update);
    };
  }, [editor]);

  return counts;
}

export default useWordCount;

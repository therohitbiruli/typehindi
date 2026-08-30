"use client";

import { keyMap } from "../data/keyboard-layout";

/**
 * Maps a keyboard event to its Hindi InScript character
 * Handles both physical QWERTY keys (when OS is English) and native Hindi input
 */
export function getInscriptCharFromEvent(e: React.KeyboardEvent): string | null {
  // If already Hindi character (native Hindi keyboard enabled in OS)
  if (e.key && e.key.length === 1 && /[ऀ-ॿ]/.test(e.key)) {
    return e.key;
  }

  // If Space key
  if (e.code === "Space" || e.key === " ") {
    return " ";
  }

  // Ignore control keys
  if (e.ctrlKey || e.altKey || e.metaKey || e.key === "Tab" || e.key === "Escape" || e.key === "Enter") {
    return null;
  }

  // Look up in InScript keyMap
  const mapping = keyMap[e.code];
  if (mapping) {
    const char = e.shiftKey ? mapping.shift : mapping.normal;
    return char || null;
  }

  return null;
}

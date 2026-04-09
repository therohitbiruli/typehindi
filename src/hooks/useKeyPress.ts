"use client";

import { useState, useEffect, useCallback } from "react";

export function useKeyPress() {
  const [activeKey, setActiveKey] = useState<string>("");
  const [isShift, setIsShift] = useState(false);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    setActiveKey(e.code);
    if (e.key === "Shift") {
      setIsShift(true);
    }
  }, []);

  const handleKeyUp = useCallback((e: KeyboardEvent) => {
    setActiveKey("");
    if (e.key === "Shift") {
      setIsShift(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [handleKeyDown, handleKeyUp]);

  return { activeKey, isShift };
}

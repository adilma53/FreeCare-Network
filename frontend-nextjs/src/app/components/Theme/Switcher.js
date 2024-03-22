"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Icon } from '@iconify/react';
export const Switcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div>
      <button onClick={() => setTheme("light")}>
        <Icon icon="tdesign:mode-light" />
      </button>
      <button onClick={() => setTheme("dark")}>
        <Icon icon="iconamoon:mode-dark-light" />
      </button>
    </div>
  );
};


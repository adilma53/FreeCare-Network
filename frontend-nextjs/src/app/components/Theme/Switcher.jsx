"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { BiMoon, BiSun } from "react-icons/bi";
import { Switch } from "@nextui-org/react";

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
    <Switch
      onClick={() => setTheme(theme == "light" ? "dark" : "light")}
      defaultSelected
      size="sm"
      color="primary"
      thumbIcon={({ isSelected, className }) =>
        isSelected ? (
          <BiMoon className={className} />
        ) : (
          <BiSun className={className} />
        )
      }
    >
    </Switch>
  );
};

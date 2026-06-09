import { useState, useEffect, useCallback } from "react";

type Theme = "light" | "dark" | "system";

export const useTheme = () => {
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem("portfolio-theme") as Theme | null;
    return saved || "system";
  });

  const [resolvedTheme, setResolvedTheme] = useState<"light" | "dark">(() => {
    const saved = localStorage.getItem("portfolio-theme");
    if (saved === "light") return "light";
    if (saved === "dark") return "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  const applyTheme = useCallback((isDark: boolean) => {
    const root = document.documentElement;

    // Add transition class for smooth theme change
    root.classList.add("theme-transition");

    if (isDark) {
      root.classList.add("dark");
      root.style.colorScheme = "dark";
    } else {
      root.classList.remove("dark");
      root.style.colorScheme = "light";
    }

    setResolvedTheme(isDark ? "dark" : "light");

    // Remove transition class after animation
    setTimeout(() => {
      root.classList.remove("theme-transition");
    }, 300);
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = (e: MediaQueryListEvent) => {
      if (theme === "system") {
        applyTheme(e.matches);
      }
    };

    // Apply theme on mount and theme change
    if (theme === "system") {
      applyTheme(mediaQuery.matches);
      mediaQuery.addEventListener("change", handleChange);
    } else {
      applyTheme(theme === "dark");
    }

    // Store preference
    localStorage.setItem("portfolio-theme", theme);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, [theme, applyTheme]);

  // Set theme and store preference
  const setThemePreference = useCallback((newTheme: Theme) => {
    setTheme(newTheme);
    if (newTheme !== "system") {
      localStorage.setItem("portfolio-theme", newTheme);
    }
  }, []);

  // Toggle between light and dark (bypassing system)
  const toggleTheme = useCallback(() => {
    setTheme((prev) => {
      const newTheme = resolvedTheme === "dark" ? "light" : "dark";
      return newTheme;
    });
  }, [resolvedTheme]);

  return {
    theme,
    resolvedTheme,
    isDark: resolvedTheme === "dark",
    setTheme: setThemePreference,
    toggleTheme,
  };
};

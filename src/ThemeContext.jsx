import React, {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

// Context-Objekt, damit alter Code weiterhin funktioniert:
//   import { ThemeContext } from "../ThemeContext";
//   const { dark } = useContext(ThemeContext);
export const ThemeContext = createContext({
  theme: "light",
  dark: false,
  toggleTheme: () => {},
});

// Initiales Theme bestimmen (LocalStorage / System-Preference)
function getInitialTheme() {
  if (typeof window !== "undefined") {
    const stored = window.localStorage.getItem("theme");
    if (stored === "light" || stored === "dark") {
      return stored;
    }
    const prefersDark = window.matchMedia?.(
      "(prefers-color-scheme: dark)"
    ).matches;
    if (prefersDark) return "dark";
  }
  return "light";
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    // Klasse auf dem <body> setzen, damit App.css reagieren kann
    document.body.classList.remove("light", "dark");
    document.body.classList.add(theme);

    // Im LocalStorage speichern
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const dark = theme === "dark";

  const value = {
    theme,   // "light" | "dark"  -> für neuen Code (useTheme)
    dark,    // boolean           -> für alten Code (Info / Impressum / etc.)
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

// Neuer, bequemer Hook für alles, was das Theme braucht
export function useTheme() {
  return useContext(ThemeContext);
}

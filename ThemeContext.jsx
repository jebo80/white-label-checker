import React, { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [dark, setDark] = useState(false);

  // System Darkmode beim ersten Laden erkennen
  useEffect(() => {
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const saved = localStorage.getItem("darkmode");

    const isDark = saved === "true" || (saved === null && systemPrefersDark);
    setDark(isDark);

    // Globale Klasse am <html>-Tag
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  // Änderung speichern + Klasse aktualisieren
  useEffect(() => {
    localStorage.setItem("darkmode", dark);
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <ThemeContext.Provider value={{ dark, setDark }}>
      {children}
    </ThemeContext.Provider>
  );
}

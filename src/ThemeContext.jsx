import React, { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [dark, setDark] = useState(false);

  // System Darkmode beim ersten Laden erkennen
  useEffect(() => {
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const saved = localStorage.getItem("darkmode");
    setDark(saved === "true" || (saved === null && systemPrefersDark));
  }, []);

  // Änderung speichern
  useEffect(() => {
    localStorage.setItem("darkmode", dark);
    document.body.style.background = dark ? "#1a1a1a" : "#f5f5f5";
    document.body.style.color = dark ? "#e6e6e6" : "#222";
  }, [dark]);

  return (
    <ThemeContext.Provider value={{ dark, setDark }}>
      {children}
    </ThemeContext.Provider>
  );
}

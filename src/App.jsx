import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import { ThemeProvider, useTheme } from "./ThemeContext";

import Home from "./pages/Home";
import Info from "./pages/Info";
import Impressum from "./pages/Impressum";
import Datenschutz from "./pages/Datenschutz";

import { Analytics } from "@vercel/analytics/react";
import "./App.css";

function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="header">

      <div className="header-left">
        <Link to="/" className="brand">
          Sieb<span className="brand-accent">Mal</span>Durch
        </Link>
      </div>

      <nav className="header-nav">
        <Link to="/">Startseite</Link>
        <Link to="/info">Info</Link>
        <Link to="/impressum">Impressum</Link>
        <Link to="/datenschutz">Datenschutz</Link>
      </nav>

      <div className="header-right">
        <a
          href="https://www.amazon.de"
          target="_blank"
          rel="noreferrer"
          className="amazon-btn"
        >
          Amazon
        </a>

        <button className="theme-btn" onClick={toggleTheme}>
          {theme === "light" ? "🌙" : "☀️"}
        </button>
      </div>

    </header>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-links">
        <Link to="/">Startseite</Link>
        <Link to="/info">Info</Link>
        <Link to="/impressum">Impressum</Link>
        <Link to="/datenschutz">Datenschutz</Link>
      </div>

      <p className="footer-copy">© 2025 SiebMalDurch</p>
    </footer>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <Header />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/info" element={<Info />} />
            <Route path="/impressum" element={<Impressum />} />
            <Route path="/datenschutz" element={<Datenschutz />} />
          </Routes>
        </main>

        <Footer />
        <Analytics />
      </Router>
    </ThemeProvider>
  );
}

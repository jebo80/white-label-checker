// src/App.jsx
import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import Info from "./pages/Info";
import Impressum from "./pages/Impressum";
import Datenschutz from "./pages/Datenschutz";

import { ThemeProvider, ThemeContext } from "./ThemeContext";
import "./App.css";

export default function App() {
  return (
    <ThemeProvider>
  <div className="app-container">
    <Router>
      <Navigation />

      <main className="main-wrapper">

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/info" element={<Info />} />
            <Route path="/impressum" element={<Impressum />} />
            <Route path="/datenschutz" element={<Datenschutz />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

/* ======================================================
   Navigation / Header — modern & clean
   ====================================================== */
function Navigation() {
  const { dark, setDark } = useContext(ThemeContext);

  return (
    <header className={`header ${dark ? "dark" : ""}`}>
      <div className="header-inner">

        {/* Branding */}
        <Link to="/" className="brand">
          SiebMalDurch
        </Link>

        {/* Navigation links */}
        <nav className="nav-links">
          <Link to="/">Startseite</Link>
          <Link to="/info">Info</Link>
        </nav>

        {/* Right side (Amazon stays here) */}
        <div className="header-actions">
          <a
            href="https://www.amazon.de/?tag=siebmaldurch-21"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="amazon-btn">Amazon</button>
          </a>
        </div>

        {/* Mode toggle (separat rechts fixiert) */}
        <button
          onClick={() => setDark(!dark)}
          className="mode-toggle-fixed"
        >
          {dark ? "☀️ Hell" : "🌙 Dunkel"}
        </button>

      </div>
    </header>
  );
}


/* ======================================================
   Footer
   ====================================================== */
function Footer() {
  const { dark } = useContext(ThemeContext);

  return (
    <footer className={`footer ${dark ? "dark" : ""}`}>
      <h3>SiebMalDurch</h3>

      <p className="footer-sub">
        Finde echte Marken – filtere White-Label-Produkte.
      </p>

      <div className="footer-links">
        <Link to="/">Startseite</Link>
        <Link to="/info">Info</Link>
        <Link to="/impressum">Impressum</Link>
        <Link to="/datenschutz">Datenschutz</Link>
      </div>

      <p className="footer-copy">
        © {new Date().getFullYear()} SiebMalDurch – Ein unabhängiges Amazon-Tool*
      </p>

      <p className="footer-hinweis">
        *Amazon ist eine eingetragene Marke. Diese Seite steht in keiner Verbindung zu Amazon.
      </p>
    </footer>
  );
}

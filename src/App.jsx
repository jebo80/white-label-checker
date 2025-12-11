import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { ThemeProvider, useTheme } from "./ThemeContext";

import Home from "./pages/Home";
import Info from "./pages/Info";
import Impressum from "./pages/Impressum";
import Datenschutz from "./pages/Datenschutz";

import "./App.css";

function Header() {
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="header">

      {/* TOP ROW */}
      <div className="header-row">

        {/* LEFT: Logo + Brand */}
        <div className="header-left">
          <div className="brand-logo"></div>
          <Link to="/" className="brand">
            Sieb<span className="brand-accent">Mal</span>Durch
          </Link>
        </div>

        {/* CENTER: Desktop Navigation */}
        <nav className="nav-desktop">
          <Link to="/">Startseite</Link>
          <Link to="/info">Info</Link>
          <Link to="/impressum">Impressum</Link>
          <Link to="/datenschutz">Datenschutz</Link>
        </nav>

        {/* RIGHT: Amazon + Theme + Burger */}
        <div className="header-right">

          {/* Desktop Amazon Button */}
          <a
            href="https://www.amazon.de"
            className="amazon-btn desktop-only"
            target="_blank"
            rel="noopener noreferrer"
          >
            Amazon
          </a>

          {/* Theme */}
          <button className="theme-btn" onClick={toggleTheme}>
            {theme === "light" ? "🌙" : "☀️"}
          </button>

          {/* Mobile Burger */}
          <button className="burger-btn mobile-only" onClick={toggleMenu}>
            ☰
          </button>

        </div>
      </div>

      {/* Mobile Amazon */}
      <div className="mobile-amazon-row mobile-only">
        <a
          href="https://www.amazon.de"
          className="amazon-btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          Amazon
        </a>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <nav className="mobile-nav">
          <Link to="/" onClick={() => setMenuOpen(false)}>Startseite</Link>
          <Link to="/info" onClick={() => setMenuOpen(false)}>Info</Link>
          <Link to="/impressum" onClick={() => setMenuOpen(false)}>Impressum</Link>
          <Link to="/datenschutz" onClick={() => setMenuOpen(false)}>Datenschutz</Link>
        </nav>
      </div>

    </header>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <nav className="footer-nav">
        <Link to="/">Startseite</Link>
        <Link to="/info">Info</Link>
        <Link to="/impressum">Impressum</Link>
        <Link to="/datenschutz">Datenschutz</Link>
      </nav>
      <p className="footer-copy">© 2025 SiebMalDurch</p>
    </footer>
  );
}

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="app-container">

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

        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;

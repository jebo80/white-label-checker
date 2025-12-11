import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { ThemeProvider, useTheme } from "./ThemeContext";

import Home from "./pages/Home";
import Info from "./pages/Info";
import Impressum from "./pages/Impressum";
import Datenschutz from "./pages/Datenschutz";

import "./App.css";

function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="header">
      <div className="header-left">
        <Link to="/" className="brand">
          <span className="brand-accent">S</span>ieb
          <span className="brand-accent">M</span>al
          <span className="brand-accent">D</span>urch
        </Link>

        <nav className="nav">
          <Link to="/">Startseite</Link>
          <Link to="/info">Info</Link>
        </nav>
      </div>

      <div className="header-right">
        <a
          href="https://www.amazon.de/?tag=whitelabelche-21"
          target="_blank"
          rel="noopener noreferrer"
          className="amazon-btn"
        >
          Amazon
        </a>

        <button className="theme-btn" onClick={toggleTheme}>
          {theme === "dark" ? "☀️" : "🌙"}
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
      <p className="footer-copy">© {new Date().getFullYear()} SiebMalDurch.de</p>
    </footer>
  );
}

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="app-container">
          <Header />

          <main className="main">
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

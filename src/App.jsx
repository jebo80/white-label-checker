import Impressum from "./Impressum";
import Datenschutz from "./Datenschutz";
import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Info from "./pages/Info";
import { ThemeProvider, ThemeContext } from "./ThemeContext";

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <Navigation />
        <MainContent />
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

// ----------------------------------------------------
// Navigation
// ----------------------------------------------------
function Navigation() {
  const { dark, setDark } = useContext(ThemeContext);

  const headerBar = {
    background: dark ? "#222" : "#ffffff",
    borderBottom: dark ? "1px solid #333" : "1px solid #e0e0e0",
    padding: "12px 0",
    position: "sticky",
    top: 0,
    zIndex: 200,
    transition: "0.3s"
  };

  const navContainer = {
    maxWidth: "1100px",
    margin: "0 auto",
    padding: "0 20px",
    display: "flex",
    alignItems: "center"
  };

  const leftNav = {
    display: "flex",
    alignItems: "center",
    gap: "20px"
  };

  const logoLink = {
    textDecoration: "none",
    color: dark ? "#58a6ff" : "#0070f3",
    fontSize: "22px",
    fontWeight: "bold",
    marginRight: "25px"
  };

  const navItem = {
    textDecoration: "none",
    color: dark ? "#ddd" : "#333",
    fontSize: "17px",
    fontWeight: "500"
  };

  const amazonBtn = {
    padding: "8px 14px",
    background: "#ff9900",
    borderRadius: "6px",
    color: "black",
    fontWeight: "bold",
    border: "none",
    cursor: "pointer"
  };

  const toggleBtn = {
    padding: "6px 14px",
    background: dark ? "#444" : "#eee",
    borderRadius: "6px",
    border: "none",
    cursor: "pointer",
    color: dark ? "white" : "black",
    marginLeft: "auto" // 🔥 Schiebt ihn ganz nach rechts
  };

  return (
    <header style={headerBar}>
      <div style={navContainer}>

        {/* Linke Seite */}
        <div style={leftNav}>
          <Link to="/" style={logoLink}>White Label Checker</Link>

          <Link to="/" style={navItem}>Startseite</Link>
          <Link to="/info" style={navItem}>Info</Link>

          <a
            href="https://www.amazon.de/?tag=whitelabelche-21"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button style={amazonBtn}>Amazon</button>
          </a>
        </div>

        {/* Rechte Seite */}
        <button onClick={() => setDark(!dark)} style={toggleBtn}>
          {dark ? "☀️ Hell" : "🌙 Dunkel"}
        </button>

      </div>
    </header>
  );
}

// ----------------------------------------------------
// Main content
// ----------------------------------------------------
function MainContent() {
  return (
    <div style={{ minHeight: "70vh" }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/info" element={<Info />} />
      </Routes>
    </div>
  );
}

// ----------------------------------------------------
// Footer
// ----------------------------------------------------
function Footer() {
  const { dark } = useContext(ThemeContext);

  const footerStyle = {
    marginTop: "50px",
    padding: "30px 20px",
    background: dark ? "#1f1f1f" : "#f3f3f3",
    borderTop: dark ? "1px solid #333" : "1px solid #ddd",
    textAlign: "center",
    transition: "0.3s"
  };

  const link = {
    textDecoration: "none",
    color: dark ? "#58a6ff" : "#0070f3",
    fontWeight: "bold"
  };

  return (
    <footer style={footerStyle}>
      <h3>White Label Checker</h3>

      <p style={{ opacity: 0.8 }}>
        Finde echte Marken – vermeide White-Label-Produkte.
      </p>

      <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
        <Link to="/" style={link}>Startseite</Link>
        <Link to="/info" style={link}>Info-Seite</Link>
      </div>

      <p style={{ marginTop: "15px", opacity: 0.7 }}>
        © {new Date().getFullYear()} White Label Checker
      </p>
    </footer>
  );
}

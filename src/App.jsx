import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Info from "./pages/Info";

export default function App() {
  return (
    <Router>

      {/* MODERNE NAVIGATION */}
      <header style={headerBar}>
        <div style={navContainer}>

          {/* LOGO / BRAND */}
          <div style={logoStyle}>
            <Link to="/" style={logoLink}>White Label Checker</Link>
          </div>

          {/* NAVIGATION LINKS */}
          <nav style={navLinks}>
            <Link to="/" style={navItem}>Startseite</Link>
            <Link to="/info" style={navItem}>Info</Link>
          </nav>

        </div>
      </header>

      {/* INHALT */}
      <div style={{ minHeight: "70vh" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/info" element={<Info />} />
        </Routes>
      </div>

      {/* FOOTER */}
      <footer style={footerStyle}>
        <div style={footerContent}>
          <h3 style={{ margin: "0 0 10px 0" }}>White Label Checker</h3>
          <p style={{ margin: "0 0 15px 0", opacity: 0.8 }}>
            Finde echte Marken – vermeide White-Label-Produkte.
          </p>

          <div style={footerLinks}>
            <Link to="/" style={footerLink}>Startseite</Link>
            <Link to="/info" style={footerLink}>Info-Seite</Link>
          </div>

          <p style={{ marginTop: "15px", fontSize: "14px", opacity: 0.7 }}>
            © {new Date().getFullYear()} White Label Checker
          </p>
        </div>
      </footer>

    </Router>
  );
}

/* ============================
   Styles
============================ */

const headerBar = {
  background: "#ffffff",
  borderBottom: "1px solid #e0e0e0",
  padding: "12px 0",
  position: "sticky",
  top: 0,
  zIndex: 50
};

const navContainer = {
  maxWidth: "1100px",
  margin: "0 auto",
  padding: "0 20px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between"
};

const logoStyle = {
  fontSize: "22px",
  fontWeight: "bold"
};

const logoLink = {
  textDecoration: "none",
  color: "#0070f3"
};

const navLinks = {
  display: "flex",
  gap: "25px"
};

const navItem = {
  textDecoration: "none",
  color: "#333",
  fontSize: "17px",
  fontWeight: "500"
};

/* Footer Styles */

const footerStyle = {
  marginTop: "50px",
  padding: "30px 20px",
  background: "#f3f3f3",
  borderTop: "1px solid #ddd",
  textAlign: "center"
};

const footerContent = {
  maxWidth: "900px",
  margin: "0 auto"
};

const footerLinks = {
  display: "flex",
  justifyContent: "center",
  gap: "20px",
  marginTop: "10px"
};

const footerLink = {
  textDecoration: "none",
  color: "#0070f3",
  fontWeight: "bold",
  fontSize: "16px"
};

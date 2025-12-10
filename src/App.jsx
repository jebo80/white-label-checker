import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Info from "./pages/Info";

export default function App() {
  return (
    <Router>

      {/* NAVIGATION */}
      <nav style={navStyle}>
        <Link to="/" style={linkStyle}>Startseite</Link>
        <Link to="/info" style={linkStyle}>Was sind White-Label-Produkte?</Link>
      </nav>

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

// =====================
// Styles
// =====================

const navStyle = {
  display: "flex",
  justifyContent: "center",
  gap: "30px",
  padding: "15px",
  background: "#f3f3f3",
  borderBottom: "1px solid #ddd",
  fontSize: "18px"
};

const linkStyle = {
  textDecoration: "none",
  color: "#0070f3",
  fontWeight: "bold"
};

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

import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Info from "./pages/Info";

export default function App() {
  return (
    <Router>
      <nav style={navStyle}>
        <Link to="/" style={linkStyle}>Startseite</Link>
        <Link to="/info" style={linkStyle}>Was sind White-Label-Produkte?</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/info" element={<Info />} />
      </Routes>
    </Router>
  );
}

// Navigation Styles
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

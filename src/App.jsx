import React, { useState } from "react";
import Impressum from "./Impressum";
import Datenschutz from "./Datenschutz";

export default function App() {
  const [page, setPage] = useState("home");
  const [query, setQuery] = useState("");
  const [products, setProducts] = useState([]);
  const [hideWL, setHideWL] = useState(false);
  const [loading, setLoading] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const pageStyle = {
    fontFamily: "Arial, sans-serif",
    padding: "20px",
    maxWidth: "900px",
    margin: "120px auto 50px auto", // Platz unter Header
    color: darkMode ? "white" : "black",
    minHeight: "60vh",
  };

  async function handleSearch() {
    setLoading(true);
    const results = []; // DEINE SEARCH-FUNKTION EINSETZEN
    setProducts(results);
    setLoading(false);
  }

  function renderPage() {
    if (page === "home") {
      return (
        <>
          <h1 style={{ textAlign: "center" }}>siebmaldurch.de</h1>

          <div style={{ marginBottom: "15px", display: "flex", gap: "10px" }}>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              placeholder="Amazon Produkt suchen…"
              style={{ flex: 1, padding: "10px", fontSize: "16px" }}
            />
            <button
              onClick={handleSearch}
              style={{
                padding: "10px 20px",
                fontSize: "16px",
                background: "#0070f3",
                color: "white",
                border: "none",
                borderRadius: "6px",
              }}
            >
              Suchen
            </button>
          </div>

          <label style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <input
              type="checkbox"
              checked={hideWL}
              onChange={() => setHideWL(!hideWL)}
            />
            White-Label-Produkte ausblenden
          </label>

          {loading && <p>Suche läuft…</p>}

          <div style={{ marginTop: "20px" }}>
            {products.map((p) => (
              <div key={p.title}>{p.title}</div>
            ))}
          </div>
        </>
      );
    }

    if (page === "info") {
      return (
        <>
          <h1>Was macht siebmaldurch.de?</h1>
          <p>
            Diese Seite hilft dir, White-Label-Produkte zu erkennen und seriöse
            Marken von Fantasienamen zu unterscheiden.
          </p>
        </>
      );
    }

    if (page === "impressum") return <Impressum />;
    if (page === "datenschutz") return <Datenschutz />;

    return null;
  }

  const headerStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    padding: "15px 20px",
    background: darkMode ? "#222" : "#f4f4f4",
    borderBottom: "1px solid #ccc",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    zIndex: 1000,
  };

  const navStyle = {
    display: "flex",
    gap: "20px",
    fontSize: "18px",
    cursor: "pointer",
  };

  const footerStyle = {
    textAlign: "center",
    padding: "20px",
    marginTop: "40px",
    borderTop: "1px solid #ccc",
  };

  return (
    <div style={{ background: darkMode ? "#111" : "white" }}>
      {/* Header */}
      <header style={headerStyle}>
        <nav style={navStyle}>
          <span onClick={() => setPage("home")}>Startseite</span>
          <span onClick={() => setPage("info")}>Info</span>
          <span onClick={() => setPage("impressum")}>Impressum</span>
          <span onClick={() => setPage("datenschutz")}>Datenschutz</span>
        </nav>

        <button
          onClick={() => setDarkMode(!darkMode)}
          style={{
            padding: "8px 14px",
            background: darkMode ? "#444" : "#0070f3",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          {darkMode ? "Hell" : "Dunkel"}
        </button>
      </header>

      {/* Inhaltsbereich */}
      <main style={pageStyle}>{renderPage()}</main>

      {/* Footer */}
      <footer style={footerStyle}>
        <span
          style={{ cursor: "pointer" }}
          onClick={() => setPage("impressum")}
        >
          Impressum
        </span>{" "}
        |{" "}
        <span
          style={{ cursor: "pointer" }}
          onClick={() => setPage("datenschutz")}
        >
          Datenschutz
        </span>
      </footer>
    </div>
  );
}

// src/pages/Home.jsx
import React, { useState, useContext } from "react";
import { searchAmazonMock } from "../api/mockAmazon";
import { ThemeContext } from "../ThemeContext";
import "./Home.css";

export default function Home() {
  const { dark } = useContext(ThemeContext);

  const [query, setQuery] = useState("");
  const [products, setProducts] = useState([]);
  const [hideWL, setHideWL] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showInfo, setShowInfo] = useState(false);

  function isWhiteLabel(name) {
    if (!name) return false;
    const weird = /[bcdfghjklmnpqrstvwxyz]{4,}/i.test(name);
    const hasNum = /\d/.test(name);
    return weird || hasNum;
  }

  async function handleSearch(e) {
    if (e) e.preventDefault();
    setLoading(true);
    const results = await searchAmazonMock(query);
    setProducts(results);
    setLoading(false);
  }

  return (
    <div className={`home-page ${dark ? "dark" : ""}`}>
      {/* HERO */}
      <section className="hero">
        <h1>SiebMalDurch</h1>
        <p className="subtitle">
          Finde echte Markenprodukte – und filtere No-Name-Artikel aus China.
        </p>

        <form className="search-bar" onSubmit={handleSearch}>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Amazon Produkt suchen..."
          />
          <button type="submit">Suchen</button>
        </form>
      </section>

      {/* Erweiterte Erklärung */}
      <section className="explain">
        Viele Amazon-Produkte kommen aus denselben Fabriken und werden nur
        umbenannt. SiebMalDurch zeigt dir solche Produkte – oder blendet sie auf Wunsch aus.
      </section>

      {/* Filter */}
      <div className="filter-row">
        <label>
          <input
            type="checkbox"
            checked={hideWL}
            onChange={() => setHideWL(!hideWL)}
          />
          No-Name / White-Label ausblenden
        </label>

        <span className="info-icon" onClick={() => setShowInfo(!showInfo)}>
          i
        </span>
      </div>

      {showInfo && (
        <div className="info-popup">
          <strong>Was sind No-Name / White-Label-Produkte?</strong>
          <br />
          <br />
          Produkte, die aus derselben Fabrik stammen und nur andere Fantasienamen tragen.
          <br />
          <br />
          <button onClick={() => setShowInfo(false)}>Schließen</button>
        </div>
      )}

      {/* Ergebnisse */}
      {loading && <p className="loading">Suche läuft...</p>}

      <div className="product-grid">
        {products
          .filter((p) => !hideWL || !isWhiteLabel(p.brand))
          .map((p, i) => (
            <div key={i} className="product-card">
              {isWhiteLabel(p.brand) && <div className="wl-badge">WL</div>}

              <img src={p.image} alt={p.title} />

              <h3>{p.title}</h3>
              <p className="brand">{p.brand}</p>

              <p className="price">{p.price} €</p>

              <a
                href="https://www.amazon.de"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="amazon-card-btn">Auf Amazon ansehen</button>
              </a>
            </div>
          ))}
      </div>
    </div>
  );
}

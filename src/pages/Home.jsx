import React, { useState } from "react";
import { searchAmazonMock } from "../api/mockAmazon";
import { useTheme } from "../ThemeContext";
import "./Home.css";

function Home() {
  const [query, setQuery] = useState("");
  const [products, setProducts] = useState([]);

  const handleSearch = async () => {
    const results = await searchAmazonMock(query);
    setProducts(results);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") handleSearch();
  };

  return (
    <div className="home-wrapper">

      {/* HERO-BEREICH */}
      <section className="hero">
        <h1 className="hero-title">Finde echte Markenprodukte.</h1>
        <p className="hero-subtitle">
          SiebMalDurch zeigt dir, was seriös wirkt – und was White-Label sein könnte.
        </p>

        <div className="hero-search">
          <input
            type="text"
            placeholder="Produkt suchen..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyPress}
          />
          <button onClick={handleSearch}>Suchen</button>
        </div>
      </section>

      {/* PRODUKTE */}
      <div className="results-section">
        <div className="product-grid">
          {products.map((p, index) => (
            <div key={index} className="product-card">
              <img src={p.image} alt={p.title} />

              <h3>{p.title}</h3>
              <p className="brand">{p.brand}</p>

              {p.isWhiteLabel && (
                <p className="whitelabel-warning">⚠ Verdacht auf White-Label</p>
              )}

              <p className="price">{p.price}</p>

              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="amazon-link"
              >
                Auf Amazon ansehen →
              </a>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

export default Home;

import React, { useState } from "react";
import { searchAmazonMock } from "../api/mockAmazon";
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

  const showWelcome = products.length === 0;

  return (
    <div className="home-wrapper">

      {/* HERO */}
      <section className="hero">
        <h1 className="hero-title">Finde echte Markenprodukte.</h1>
        <p className="hero-subtitle">
          SiebMalDurch hilft dir, verdächtige White-Label-Produkte schnell zu erkennen.
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

      {/* WILLKOMMEN – Nur sichtbar wenn keine Ergebnisse */}
      {showWelcome && (
        <section className="welcome-box">
          <h2>Willkommen bei SiebMalDurch</h2>
          <p>
            Dieses Tool analysiert Online-Produkte und zeigt dir, ob der Markenname
            ungewöhnlich wirkt oder Hinweise auf ein White-Label-Produkt bestehen.
          </p>

          <h3>Was bedeutet „White-Label“?</h3>
          <p>
            White-Label-Produkte sind Artikel von anonymen Herstellern, die unter
            Fantasienamen verkauft werden. Sie sehen wie Markenprodukte aus – sind es aber oft nicht.
          </p>
        </section>
      )}

      {/* PRODUKTERGEBNISSE */}
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

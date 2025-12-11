import React, { useState } from "react";
import { searchAmazonMock } from "../api/mockAmazon";
import "./Home.css";

function Home() {
  const [query, setQuery] = useState("");
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleSearch = async () => {
    const results = await searchAmazonMock(query);
    setProducts(results);
    setSelectedProduct(null);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") handleSearch();
  };

  const showWelcome = products.length === 0 && !selectedProduct;

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

      {/* WILLKOMMEN */}
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
            Fantasienamen verkauft werden.
          </p>
        </section>
      )}

      {/* ===============================
          DETAIL ANSICHT
      ================================ */}
      {selectedProduct && (
        <div className="detail-view">

          <button className="back-button" onClick={() => setSelectedProduct(null)}>
            ← Zurück zu den Ergebnissen
          </button>

          <div className="detail-content">

            <div className="detail-image">
              <img src={selectedProduct.image} alt={selectedProduct.title} />
            </div>

            <div className="detail-info">
              <h2>{selectedProduct.title}</h2>
              <p className="detail-brand">{selectedProduct.brand}</p>
              <p className="detail-price">{selectedProduct.price} €</p>

              <a
                href={selectedProduct.url}
                target="_blank"
                rel="noopener noreferrer"
                className="detail-amazon-btn"
              >
                Auf Amazon ansehen →
              </a>
            </div>

          </div>
        </div>
      )}

      {/* ===============================
          PRODUKT GRID
      ================================ */}
      {!selectedProduct && (
        <div className="results-section">
          <div className="product-grid">
            {products.map((p, index) => (
              <div key={index} className="product-card">

                {p.isWhiteLabel && <div className="wl-badge">Verdacht</div>}

                <div className="card-image-wrapper">
                  <img src={p.image} alt={p.title} />
                </div>

                <div className="card-content">
                  <h3 className="card-title">{p.title}</h3>
                  <p className="card-brand">{p.brand}</p>
                </div>

                {/* Preis */}
                <div className="card-price">{p.price} €</div>

                {/* Unterer Block (grau) */}
                <div className="card-lower">
                  <button
                    className="details-btn"
                    onClick={() => setSelectedProduct(p)}
                  >
                    Details
                  </button>

                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="amazon-btn-small"
                  >
                    Auf Amazon ansehen →
                  </a>
                </div>

              </div>
            ))}
          </div>
        </div>
      )}

    </div>
  );
}

export default Home;

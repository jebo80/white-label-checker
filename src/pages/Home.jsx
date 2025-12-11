import React, { useState } from "react";
import { searchAmazonMock } from "../api/mockAmazon";
import { useTheme } from "../ThemeContext";
import "./Home.css";

function Home() {
  const [query, setQuery] = useState("");
  const [products, setProducts] = useState([]);
  const { theme } = useTheme(); // falls du theme später brauchst

  const handleSearch = async () => {
    const results = await searchAmazonMock(query);
    setProducts(results);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="home-container">
      <h1 className="home-title">Produktsuche</h1>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Produkt suchen..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyPress}
        />
        <button onClick={handleSearch}>Suchen</button>
      </div>

      <div className="product-grid">
        {products.map((p, index) => (
          <div key={index} className="product-card">
            <img src={p.image} alt={p.title} />
            <h3>{p.title}</h3>
            <p className="brand">{p.brand}</p>

            {p.isWhiteLabel && (
              <p className="whitelabel-warning">
                ⚠️ Möglicherweise White-Label
              </p>
            )}

            <p className="price">{p.price}</p>

            <a
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="amazon-link"
            >
              Auf Amazon ansehen
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;

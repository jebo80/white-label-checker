import React, { useState } from 'react'
import { searchAmazonMock } from './api/mockAmazon'

export default function App() {
  const [query, setQuery] = useState('');
  const [products, setProducts] = useState([]);
  const [hideWL, setHideWL] = useState(false);
  const [loading, setLoading] = useState(false);

  function isWhiteLabel(name) {
    if (!name) return false;
    const weird = /[bcdfghjklmnpqrstvwxyz]{4,}/i.test(name);
    const hasNum = /\d/.test(name);
    return weird || hasNum;
  }

  async function handleSearch(e) {
    if (e) e.preventDefault(); // verhindert Form-Reload
    setLoading(true);
    const results = await searchAmazonMock(query);
    setProducts(results);
    setLoading(false);
  }

  const pageStyle = {
    fontFamily: "Arial, sans-serif",
    padding: "20px",
    maxWidth: "900px",
    margin: "auto"
  };

  const searchArea = {
    display: "flex",
    gap: "10px",
    marginBottom: "15px"
  };

  const cardGrid = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
    gap: "20px",
    marginTop: "20px"
  };

  const cardStyle = {
    border: "1px solid #ddd",
    borderRadius: "10px",
    padding: "15px",
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
    textAlign: "center",
    background: "white"
  };

  return (
    <div style={pageStyle}>
      <h1 style={{ textAlign: "center" }}>White Label Checker MVP</h1>

      {/* FORM ELEMENT → ENTER FUNKTIONIERT AUTOMATISCH */}
      <form onSubmit={handleSearch} style={searchArea}>
        <input 
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Amazon Produkt suchen..."
          style={{ flex: 1, padding: "10px", fontSize: "16px" }}
        />

        <button 
          type="submit"
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            cursor: "pointer",
            background: "#0070f3",
            color: "white",
            border: "none",
            borderRadius: "6px"
          }}
        >
          Suchen
        </button>
      </form>

      <label style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <input 
          type="checkbox" 
          checked={hideWL} 
          onChange={() => setHideWL(!hideWL)} 
        />
        White-Label-Produkte ausblenden
      </label>

      {loading && <p>Suche läuft...</p>}

      <div style={cardGrid}>
        {products
          .filter(p => !hideWL || !isWhiteLabel(p.brand))
          .map((p, i) => (
            <div key={i} style={cardStyle}>
              <img 
                src={p.image} 
                alt={p.title} 
                style={{ width: "100%", borderRadius: "8px" }}
              />
              <h3>{p.title}</h3>
              <p><strong>{p.brand}</strong></p>

              {isWhiteLabel(p.brand) && (
                <p style={{ color: "red", fontWeight: "bold" }}>
                  (White-Label erkannt)
                </p>
              )}

              <p>Preis: {p.price} €</p>
            </div>
        ))}
      </div>
    </div>
  );
}

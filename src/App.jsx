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
    if (e) e.preventDefault();
    setLoading(true);
    const results = await searchAmazonMock(query);
    setProducts(results);
    setLoading(false);
  }

  const headerStyle = {
    background: "linear-gradient(135deg, #0070f3, #3291ff)",
    padding: "40px 20px",
    color: "white",
    textAlign: "center",
    borderRadius: "0 0 20px 20px",
    marginBottom: "25px"
  };

  const headerTitle = {
    fontSize: "32px",
    fontWeight: "bold",
    margin: "0"
  };

  const headerSubtitle = {
    fontSize: "18px",
    marginTop: "10px",
    opacity: 0.9
  };

  const topBar = {
    display: "flex",
    justifyContent: "flex-end",
    marginBottom: "10px"
  };

  const amazonButton = {
    padding: "10px 16px",
    background: "white",
    color: "#0070f3",
    fontWeight: "bold",
    borderRadius: "8px",
    cursor: "pointer",
    border: "none"
  };

  const formStyle = {
    display: "flex",
    gap: "10px",
    justifyContent: "center",
    marginTop: "25px"
  };

  const cardGrid = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
    gap: "20px",
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
    <div>

      {/* AMAZON BUTTON OBEN RECHTS */}
      <div style={topBar}>
        <a 
          href="https://www.amazon.de/?tag=whitelabelche-21"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button style={amazonButton}>Amazon öffnen</button>
        </a>
      </div>

      {/* HEADER-BEREICH */}
      <div style={headerStyle}>
        <h1 style={headerTitle}>White Label Checker</h1>
        <p style={headerSubtitle}>
          Finde echte Marken – vermeide White-Label-Produkte.
        </p>

        {/* SUCHFELD */}
        <form onSubmit={handleSearch} style={formStyle}>
          <input 
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Amazon Produkt suchen..."
            style={{ 
              padding: "12px",
              fontSize: "16px",
              width: "60%",
              borderRadius: "8px",
              border: "none"
            }}
          />

          <button 
            type="submit"
            style={{
              padding: "12px 20px",
              fontSize: "16px",
              cursor: "pointer",
              background: "white",
              color: "#0070f3",
              border: "none",
              borderRadius: "8px",
              fontWeight: "bold"
            }}
          >
            Suchen
          </button>
        </form>
      </div>

      {/* WHITE-LABEL FILTER */}
      <div style={{ textAlign: "center", marginBottom: "15px" }}>
        <label style={{ display: "inline-flex", gap: "8px", alignItems: "center" }}>
          <input 
            type="checkbox" 
            checked={hideWL} 
            onChange={() => setHideWL(!hideWL)} 
          />
          White-Label-Produkte ausblenden
        </label>
      </div>

      {/* SUCHE LÄUFT */}
      {loading && <p style={{ textAlign: "center" }}>Suche läuft...</p>}

      {/* PRODUKTGRID */}
      <div style={{ padding: "20px" }}>
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
            ))
          }
        </div>
      </div>

    </div>
  );
}

import React, { useState } from 'react'
import { searchAmazonMock } from '../api/mockAmazon'

export default function Home() {
  const [query, setQuery] = useState('');
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

  const topBar = {
    display: "flex",
    justifyContent: "flex-end",
    padding: "10px 20px"
  };

  const amazonButton = {
    padding: "10px 16px",
    background: "#ff9900",
    color: "black",
    fontWeight: "bold",
    borderRadius: "8px",
    cursor: "pointer",
    border: "none",
    boxShadow: "0 2px 5px rgba(0,0,0,0.15)"
  };

  const headerStyle = {
    background: "linear-gradient(135deg, #0070f3, #3291ff)",
    padding: "40px 20px 60px 20px",
    color: "white",
    textAlign: "center",
    borderRadius: "0 0 25px 25px",
    marginBottom: "25px"
  };

  const formStyle = {
    display: "flex",
    gap: "10px",
    justifyContent: "center",
    marginTop: "25px"
  };

  // Card Design
  const cardGrid = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
    gap: "25px",
    padding: "20px"
  };

  const cardStyle = {
    borderRadius: "14px",
    padding: "18px",
    background: "white",
    boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
    transition: "0.25s",
    position: "relative"
  };

  const cardHover = {
    transform: "translateY(-4px)",
    boxShadow: "0 8px 20px rgba(0,0,0,0.15)"
  };

  const wlBadge = {
    position: "absolute",
    top: "12px",
    right: "12px",
    background: "rgba(255,0,0,0.85)",
    color: "white",
    borderRadius: "6px",
    padding: "4px 8px",
    fontSize: "12px",
    fontWeight: "bold"
  };

  const infoIcon = {
    display: "inline-block",
    width: "22px",
    height: "22px",
    borderRadius: "50%",
    background: "#0070f3",
    color: "white",
    textAlign: "center",
    lineHeight: "22px",
    cursor: "pointer",
    marginLeft: "8px",
    fontWeight: "bold"
  };

  const infoPopup = {
    position: "absolute",
    background: "white",
    padding: "15px",
    borderRadius: "8px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
    width: "260px",
    right: "50%", 
    transform: "translateX(50%)",
    top: "200px",
    zIndex: 10,
    fontSize: "14px",
    lineHeight: "1.4"
  };

  return (
    <div style={{ position: "relative" }}>

      {/* Amazon Button */}
      <div style={topBar}>
        <a 
          href="https://www.amazon.de/?tag=whitelabelche-21"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button style={amazonButton}>Amazon öffnen</button>
        </a>
      </div>

      {/* Header */}
      <div style={headerStyle}>
        <h1 style={{ fontSize: "34px", fontWeight: "bold" }}>White Label Checker</h1>

        <p style={{ maxWidth: "700px", margin: "10px auto", opacity: 0.95 }}>
          Viele Produkte auf Amazon stammen aus derselben Fabrik in China – und werden nur mit einem Fantasienamen versehen.
          Unsere Suche hilft dir, solche Produkte zu erkennen.
        </p>

        {/* Search Bar */}
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

      {/* Filter */}
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <label style={{ display: "inline-flex", gap: "8px", alignItems: "center" }}>
          <input 
            type="checkbox" 
            checked={hideWL} 
            onChange={() => setHideWL(!hideWL)} 
          />
          White-Label-Produkte ausblenden
        </label>

        {/* Info Icon */}
        <span 
          style={infoIcon}
          onClick={() => setShowInfo(!showInfo)}
        >
          i
        </span>
      </div>

      {/* Info Box */}
      {showInfo && (
        <div style={infoPopup}>
          <strong>Was ist ein White-Label-Produkt?</strong>
          <br /><br />
          Ein White-Label-Produkt wird von einer Fabrik hergestellt und von vielen Händlern unter verschiedenen Markennamen verkauft.
          <br /><br />
          <button 
            onClick={() => setShowInfo(false)}
            style={{
              marginTop: "5px",
              width: "100%",
              padding: "6px",
              borderRadius: "6px",
              border: "none",
              background: "#0070f3",
              color: "white",
              cursor: "pointer"
            }}
          >
            Schließen
          </button>
        </div>
      )}

      {/* Results */}
      {loading && <p style={{ textAlign: "center" }}>Suche läuft...</p>}

      <div style={cardGrid}>
        {products
          .filter(p => !hideWL || !isWhiteLabel(p.brand))
          .map((p, i) => (
            <div 
              key={i} 
              style={cardStyle}
              onMouseEnter={e => Object.assign(e.currentTarget.style, cardHover)}
              onMouseLeave={e => Object.assign(e.currentTarget.style, cardStyle)}
            >
              {/* WL Badge */}
              {isWhiteLabel(p.brand) && (
                <div style={wlBadge}>WL</div>
              )}

              <img 
                src={p.image} 
                alt={p.title} 
                style={{ width: "100%", borderRadius: "10px" }}
              />

              <h3 style={{ marginTop: "10px", fontSize: "18px" }}>{p.title}</h3>
              <p style={{ opacity: 0.7 }}>{p.brand}</p>

              <p style={{ fontSize: "20px", fontWeight: "bold" }}>{p.price} €</p>

              <a 
                href="https://www.amazon.de"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button style={{
                  marginTop: "10px",
                  padding: "10px 16px",
                  background: "#ff9900",
                  border: "none",
                  borderRadius: "8px",
                  cursor: "pointer",
                  fontWeight: "bold"
                }}>
                  Auf Amazon ansehen
                </button>
              </a>
            </div>
          ))
        }
      </div>

    </div>
  );
}

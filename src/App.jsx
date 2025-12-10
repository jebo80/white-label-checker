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

  async function handleSearch() {
    setLoading(true);
    const results = await searchAmazonMock(query);
    setProducts(results);
    setLoading(false);
  }

  return (
    <div style={{ fontFamily: 'Arial', padding: 20 }}>
      <h1>White Label Checker MVP</h1>

      <input 
        value={query} 
        onChange={e => setQuery(e.target.value)} 
        placeholder="Amazon Produkt suchen..."
      />
      <button onClick={handleSearch}>Suchen</button>

      <div style={{ marginTop: 10 }}>
        <label>
          <input 
            type="checkbox" 
            checked={hideWL} 
            onChange={() => setHideWL(!hideWL)} 
          />
          White-Label-Produkte ausblenden
        </label>
      </div>

      {loading && <p>Suche läuft...</p>}

      <h2>Ergebnisse:</h2>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {products
          .filter(p => !hideWL || !isWhiteLabel(p.brand))
          .map((p, i) => (
            <li key={i} style={{ marginBottom: 20 }}>
              <img src={p.image} alt="" width="120" /><br />
              <strong>{p.title}</strong><br />
              {p.brand}{" "}
              {isWhiteLabel(p.brand) && (
                <span style={{color:"red"}}>(White-Label)</span>
              )}
              <div>Preis: {p.price} €</div>
            </li>
        ))}
      </ul>
    </div>
  );
}

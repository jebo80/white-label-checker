import React, { useState } from 'react'

export default function App() {
  const [query, setQuery] = useState('');
  const [products, setProducts] = useState([]);
  const [hideWL, setHideWL] = useState(false);

  function isWhiteLabel(name) {
    if (!name) return false;
    const weird = /[bcdfghjklmnpqrstvwxyz]{4,}/i.test(name);
    const hasNum = /\d/.test(name);
    return weird || hasNum;
  }

  const mockData = [
    { title: "Bosch Professional Bohrmaschine", brand: "Bosch" },
    { title: "XGHJY Powerbank 30000mAh", brand: "XGHJY" },
    { title: "Philips Elektrorasierer Series 3000", brand: "Philips" },
    { title: "JYTK9 USB-C Kabel", brand: "JYTK9" }
  ];

  function handleSearch() {
    setProducts(mockData);
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

      <h2>Ergebnisse:</h2>
      <ul>
        {products
          .filter(p => !hideWL || !isWhiteLabel(p.brand))
          .map((p, i) => (
          <li key={i}>
            <strong>{p.title}</strong> — {p.brand}{" "}
            {isWhiteLabel(p.brand) && <span style={{color:"red"}}>(White-Label)</span>}
          </li>
        ))}
      </ul>
    </div>
  );
}

import React from "react";
import { Link } from "react-router-dom";

export default function Info() {
  const sectionStyle = {
    maxWidth: "900px",
    margin: "40px auto",
    padding: "20px",
    lineHeight: "1.6",
    fontSize: "18px"
  };

  const titleStyle = {
    fontSize: "34px",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: "10px"
  };

  const subtitleStyle = {
    fontSize: "20px",
    textAlign: "center",
    marginBottom: "30px",
    opacity: 0.8
  };

  const boxStyle = {
    background: "#f7f9fc",
    padding: "20px",
    borderRadius: "10px",
    marginBottom: "25px",
    boxShadow: "0 1px 4px rgba(0,0,0,0.1)"
  };

  const highlight = {
    fontWeight: "bold",
    color: "#0070f3"
  };

  const listItem = {
    marginBottom: "12px"
  };

  const backBtn = {
    display: "inline-block",
    marginTop: "30px",
    padding: "12px 18px",
    background: "#0070f3",
    color: "white",
    borderRadius: "8px",
    textDecoration: "none",
    fontWeight: "bold"
  };

  return (
    <div style={sectionStyle}>
      <h1 style={titleStyle}>Was sind White-Label-Produkte?</h1>
      <p style={subtitleStyle}>
        Eine einfache Erklärung – damit du verstehst, warum diese Seite existiert.
      </p>

      {/* Abschnitt 1 */}
      <div style={boxStyle}>
        <h2>White-Label-Produkte kurz erklärt</h2>
        <p>
          Ein <span style={highlight}>White-Label-Produkt</span> ist ein Artikel, 
          der von einer Fabrik in großen Mengen produziert wird – meist in China –, 
          und anschließend von hunderten verschiedenen Händlern auf Amazon verkauft wird.
        </p>
        <p>
          Jeder Händler packt einfach <strong>seinen eigenen Fantasie-Markennamen</strong> 
          darauf. Das Produkt bleibt aber identisch.
        </p>
      </div>

      {/* Abschnitt 2 */}
      <div style={boxStyle}>
        <h2>Warum sind solche Produkte problematisch?</h2>
        <ul>
          <li style={listItem}>
            ❌ <strong>Markenname hat keine Bedeutung:</strong> Er ist frei erfunden.
          </li>
          <li style={listItem}>
            ❌ <strong>Geringere Qualitätskontrolle:</strong> Verschiedene Händler, gleiche Fabrik.
          </li>
          <li style={listItem}>
            ❌ <strong>Kurzlebig:</strong> Marken verschwinden oft nach wenigen Monaten.
          </li>
          <li style={listItem}>
            ❌ <strong>Gefälschte Bewertungen sind häufig:</strong> künstlich gepushte Rezensionen.
          </li>
        </ul>

        <p>
          Für Käufer wirkt es wie ein Markenprodukt – aber oft steckt nur ein 
          <span style={highlight}>billiger No-Name-Artikel</span> dahinter.
        </p>
      </div>

      {/* Abschnitt 3 */}
      <div style={boxStyle}>
        <h2>Wie hilft dir der White Label Checker?</h2>
        <p>Unsere Seite erkennt typische Merkmale von White-Label-Produkten:</p>

        <ul>
          <li style={listItem}>🔍 ungewöhnliche, unaussprechliche Markennamen</li>
          <li style={listItem}>🔍 Zahlen und Sonderzeichen im Markennamen</li>
          <li style={listItem}>🔍 wiederkehrende Muster typischer China-Labels</li>
          <li style={listItem}>🔍 Mehrere Händler verkaufen identisches Produkt</li>
        </ul>

        <p>
          Ziel ist es, dir beim Einkauf auf Amazon zu helfen – damit du die 
          <strong>echten Markenprodukte</strong> findest.
        </p>
      </div>

      {/* Abschnitt 4 */}
      <div style={boxStyle}>
        <h2>Beispiele typischer White-Label-Marken</h2>
        <ul>
          <li style={listItem}>⚠️ „Hawason“, „XGHTY“, „FIMEI“, „AGPTek“</li>
          <li style={listItem}>⚠️ „YABER“, „AUKING“, „TOPVISION“</li>
          <li style={listItem}>⚠️ Fantasienamen ohne erkennbare Herkunft</li>
        </ul>

        <p>
          Diese Namen sind austauschbar – und die Produkte oft identisch.
        </p>
      </div>

      {/* Abschnitt 5 */}
      <div style={boxStyle}>
        <h2>Warum ist das für dich wichtig?</h2>
        <p>
          Wenn du bewusst einkaufst, möchtest du wahrscheinlich:
        </p>

        <ul>
          <li style={listItem}>✔ langlebige Produkte</li>
          <li style={listItem}>✔ echte Markenqualität</li>
          <li style={listItem}>✔ bessere Garantieleistungen</li>
          <li style={listItem}>✔ nachvollziehbare Hersteller</li>
        </ul>

        <p>
          Der White Label Checker unterstützt dich exakt bei diesem Ziel.
        </p>
      </div>

      <Link to="/" style={backBtn}>Zurück zur Startseite</Link>
    </div>
  );
}

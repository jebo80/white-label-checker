import React, { useContext } from "react";
import { ThemeContext } from "../ThemeContext";

export default function Info() {
  const { dark } = useContext(ThemeContext);

  const pageStyle = {
    padding: "40px 20px",
    maxWidth: "900px",
    margin: "auto",
    color: dark ? "#eaeaea" : "#222"
  };

  const titleStyle = {
    textAlign: "center",
    fontSize: "36px",
    marginBottom: "10px"
  };

  const subtitleStyle = {
    textAlign: "center",
    fontSize: "18px",
    opacity: 0.85,
    marginBottom: "40px"
  };

  // ⭐ Die Karten passen sich jetzt optisch dem Darkmode an
  const cardStyle = {
    background: dark ? "#2a2a2a" : "#ffffff",
    padding: "25px",
    borderRadius: "12px",
    marginBottom: "30px",
    boxShadow: dark
      ? "0 4px 12px rgba(0,0,0,0.35)"
      : "0 4px 12px rgba(0,0,0,0.1)",
    transition: "0.3s",
    color: dark ? "#eaeaea" : "#222"
  };

  const cardTitle = {
    fontSize: "24px",
    marginBottom: "15px",
    opacity: dark ? 0.9 : 0.85
  };

  const listItem = {
    marginBottom: "10px",
    display: "flex",
    alignItems: "center",
    gap: "10px"
  };

  const iconStyle = {
    fontSize: "20px",
    color: dark ? "#ff6b6b" : "#d9534f"
  };

  const linkStyle = {
    color: dark ? "#58a6ff" : "#0070f3",
    textDecoration: "none",
    fontWeight: "bold"
  };

  return (
    <div style={pageStyle}>
      <h1 style={titleStyle}>Was sind White-Label-Produkte?</h1>
      <p style={subtitleStyle}>
        Eine einfache Erklärung – damit du verstehst, warum diese Seite existiert.
      </p>

      {/* Karte 1 */}
      <div style={cardStyle}>
        <h2 style={cardTitle}>White-Label-Produkte kurz erklärt</h2>
        <p>
          Ein{" "}
          <a href="https://de.wikipedia.org/wiki/White-Label-Produkt" style={linkStyle} target="_blank">
            White-Label-Produkt
          </a>{" "}
          ist ein Artikel, der von einer Fabrik in großen Mengen produziert wird – meist in China –, 
          und anschließend von hunderten verschiedenen Händlern auf Amazon verkauft wird.
        </p>
        <br />
        <p>
          Jeder Händler packt einfach{" "}
          <strong>seinen eigenen Fantasie-Markennamen</strong> drauf.  
          Das Produkt bleibt aber identisch.
        </p>
      </div>

      {/* Karte 2 */}
      <div style={cardStyle}>
        <h2 style={cardTitle}>Warum sind solche Produkte problematisch?</h2>

        <div style={listItem}>
          <span style={iconStyle}>✖</span>
          <p>
            <strong>Markenname hat keine Bedeutung:</strong>  
            Er ist frei erfunden.
          </p>
        </div>

        <div style={listItem}>
          <span style={iconStyle}>✖</span>
          <p>
            <strong>Geringere Qualitätskontrolle:</strong>  
            Verschiedene Händler, gleiche Fabrik.
          </p>
        </div>

        <div style={listItem}>
          <span style={iconStyle}>✖</span>
          <p>
            <strong>Kurzlebig:</strong> Marken verschwinden oft nach wenigen Monaten.
          </p>
        </div>

        <div style={listItem}>
          <span style={iconStyle}>✖</span>
          <p>
            <strong>Gefälschte Bewertungen sind häufig:</strong> künstlich gepushte Rezensionen.
          </p>
        </div>

        <p style={{ marginTop: "10px" }}>
          Für Käufer wirkt es wie ein Markenprodukt – aber oft steckt nur ein{" "}
          <a
            href="https://de.wikipedia.org/wiki/No-Name-Produkt"
            style={linkStyle}
            target="_blank"
          >
            billiger No-Name-Artikel
          </a>{" "}
          dahinter.
        </p>
      </div>

      {/* Karte 3 */}
      <div style={cardStyle}>
        <h2 style={cardTitle}>Wie hilft dir der White Label Checker?</h2>

        <p>
          Unsere Seite zeigt dir, ob ein Produkt wahrscheinlich ein White-Label-Artikel ist – basierend auf
          Markennamen, Produktdesign und typischen Anzeichen.
        </p>
        <br />
        <p>
          So kannst du herausfinden, ob du ein echtes Markenprodukt kaufst oder nur einen weiteren
          umgelabelten Artikel.
        </p>
      </div>
    </div>
  );
}

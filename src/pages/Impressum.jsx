import React from "react";

export default function Impressum() {
  const pageStyle = {
    maxWidth: "800px",
    margin: "40px auto",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
    lineHeight: "1.6",
  };

  return (
    <div style={pageStyle}>
      <h1>Impressum</h1>

      <p><strong>Angaben gemäß § 5 TMG</strong></p>

      <p>
        <strong>Name:</strong> Jens Bormann<br />
        <strong>Adresse:</strong> Rumpfstraße 4<br />
        99986 Vogtei OT Niederdorla
      </p>

      <p>
        <strong>Kontakt:</strong><br />
        E-Mail: jenbor80@gmail.com<br />
        Telefon (optional): ---
      </p>

      <p>
        <strong>Umsatzsteuer-ID:</strong><br />
        ---<br />
      </p>

      <h2>Haftungsausschluss</h2>

      <h3>Haftung für Inhalte</h3>
      <p>
        Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die
        Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch
        keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG
        für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
        verantwortlich.
      </p>

      <h3>Haftung für Links</h3>
      <p>
        Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren
        Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden
        Inhalte auch keine Gewähr übernehmen.
      </p>

      <h3>Urheberrecht</h3>
      <p>
        Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen
        Seiten unterliegen dem deutschen Urheberrecht. Beiträge Dritter sind als
        solche gekennzeichnet.
      </p>

      <p>
        Quelle teilweise: eRecht24
      </p>
    </div>
  );
}

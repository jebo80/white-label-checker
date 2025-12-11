// src/pages/Impressum.jsx
import React from "react";

function Impressum() {
  return (
    <div style={{ maxWidth: "900px", margin: "40px auto", padding: "0 20px" }}>
      <h1>Impressum</h1>
      <p>
        Angaben gemäß § 5 TMG
        <br />
        (Hier deine Anschrift / Verantwortliche Person eintragen)
      </p>
      <h2>Kontakt</h2>
      <p>
        E-Mail: <a href="mailto:deine-adresse@example.com">deine-adresse@example.com</a>
      </p>
      <h2>Haftungsausschluss</h2>
      <p>
        Die Inhalte dieser Website wurden mit größter Sorgfalt erstellt. Für die Richtigkeit,
        Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.
      </p>
      <p>
        Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte
        externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber
        verantwortlich.
      </p>
    </div>
  );
}

export default Impressum;

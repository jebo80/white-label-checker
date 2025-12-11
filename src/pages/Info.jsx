// src/pages/Info.jsx
import React from "react";

function Info() {
  return (
    <div style={{ maxWidth: "900px", margin: "40px auto", padding: "0 20px" }}>
      <h1>Über SiebMalDurch</h1>
      <p>
        SiebMalDurch soll dir helfen, echte Markenprodukte schneller zu erkennen und verdächtige
        White-Label-Angebote besser einschätzen zu können.
      </p>
      <h2>Was sind White-Label-Produkte?</h2>
      <p>
        White-Label-Produkte werden von Herstellern anonym produziert und anschließend von
        verschiedenen Händlern unter frei gewählten Markennamen verkauft. Oft sind diese Namen
        Fantasiewörter, schwer auszusprechen oder wirken austauschbar.
      </p>
      <h2>Was macht dieses Tool?</h2>
      <ul>
        <li>Es analysiert Produktnamen und Marken auf Auffälligkeiten.</li>
        <li>Es markiert Produkte, bei denen ein White-Label-Verdacht besteht.</li>
        <li>Es hilft dir, schneller zu Produkten bekannter Marken zu navigieren.</li>
      </ul>
      <p>
        Wichtig: SiebMalDurch ersetzt keine rechtliche Bewertung und trifft keine endgültigen
        Aussagen über Qualität oder Herkunft eines Produkts. Es ist ein Hilfswerkzeug zur
        Orientierung.
      </p>
    </div>
  );
}

export default Info;

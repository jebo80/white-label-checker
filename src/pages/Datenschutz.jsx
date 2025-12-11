// src/pages/Datenschutz.jsx
import React from "react";

function Datenschutz() {
  return (
    <div style={{ maxWidth: "900px", margin: "40px auto", padding: "0 20px" }}>
      <h1>Datenschutzerklärung</h1>
      <p>
        Der Schutz deiner persönlichen Daten ist uns wichtig. Nachfolgend informieren wir dich über
        die Verarbeitung personenbezogener Daten beim Besuch dieser Website.
      </p>

      <h2>1. Verantwortlicher</h2>
      <p>(Hier deine Kontaktdaten als Verantwortlicher eintragen.)</p>

      <h2>2. Zugriffsdaten</h2>
      <p>
        Beim Aufrufen dieser Website werden automatisch technische Informationen (z. B. IP-Adresse,
        Datum, Uhrzeit, aufgerufene Seiten) durch deinen Browser an unseren Server übermittelt.
        Diese Daten dienen ausschließlich der technischen Bereitstellung und Sicherheit.
      </p>

      <h2>3. Externe Links (z. B. Amazon)</h2>
      <p>
        Unsere Seite verlinkt auf externe Angebote (z. B. Amazon). Beim Klick auf diese Links
        verlässt du unsere Website und es gelten die Datenschutzbestimmungen der jeweiligen
        Anbieter.
      </p>

      <h2>4. Rechte der betroffenen Personen</h2>
      <p>
        Du hast das Recht auf Auskunft über die dich betreffenden personenbezogenen Daten sowie auf
        Berichtigung, Löschung oder Einschränkung der Verarbeitung. Wende dich dazu an die im
        Impressum genannte Kontaktadresse.
      </p>
    </div>
  );
}

export default Datenschutz;

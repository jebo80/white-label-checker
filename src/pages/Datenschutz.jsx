import React from "react";

export default function Datenschutz() {
  const pageStyle = {
    maxWidth: "800px",
    margin: "40px auto",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
    lineHeight: "1.6",
  };

  return (
    <div style={pageStyle}>
      <h1>Datenschutzerklärung</h1>

      <p>
        Diese Datenschutzerklärung klärt Sie über die Art, den Umfang und Zweck
        der Verarbeitung personenbezogener Daten auf dieser Website auf.
      </p>

      <h2>1. Verantwortlicher</h2>
      <p>
        Jens Bormann<br />
        Rumpfstraße 4<br />
        99986 Vogtei OT Niederdorla<br />
        E-Mail: jenbor80@gmail.com
      </p>

      <h2>2. Hosting</h2>
      <p>
        Diese Website wird auf Servern von Vercel (Vercel Inc.) betrieben. Beim
        Aufruf der Seite werden automatisch Logfiles (z. B. IP-Adresse,
        Browsertyp, Datum/Uhrzeit) verarbeitet.
      </p>

      <h2>3. Erhebung und Verarbeitung personenbezogener Daten</h2>
      <p>
        Personenbezogene Daten werden nur erhoben, wenn Sie diese freiwillig
        mitteilen, z. B. durch Eingabe in ein Suchfeld.
      </p>

      <h2>4. Cookies / Tracking</h2>
      <p>
        Diese Seite verwendet keine eigenen Cookies. Allerdings kann der Hosting-
        Anbieter technisch notwendige Cookies setzen.
      </p>

      <h2>5. Amazon-Partnerprogramm</h2>
      <p>
        Als Teilnehmer am Amazon EU-Partnerprogramm verdienen wir an qualifizierten Verkäufen.
        Amazon kann Cookies einsetzen, um die Herkunft der Bestellungen
        nachzuvollziehen.
      </p>

      <h2>6. Ihre Rechte</h2>
      <p>
        Sie haben das Recht auf Auskunft, Berichtigung, Löschung und Widerspruch
        gegen die Verarbeitung.
      </p>

      <h2>7. Kontakt</h2>
      <p>
        Bei Fragen zum Datenschutz wenden Sie sich bitte an die oben angegebene
        Kontaktadresse.
      </p>

      <p>
        Quelle teilweise: eRecht24
      </p>
    </div>
  );
}

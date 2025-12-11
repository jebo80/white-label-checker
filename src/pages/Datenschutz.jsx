import React, { useContext } from "react";
import { ThemeContext } from "../ThemeContext";

export default function Datenschutz() {
  const { dark } = useContext(ThemeContext);

  const style = {
    maxWidth: "900px",
    margin: "50px auto",
    padding: "20px",
    lineHeight: "1.7",
    color: dark ? "#fff" : "#000"
  };

  return (
    <div style={style}>
      <h1>Datenschutzerklärung</h1>

      <p>
        Diese Datenschutzerklärung klärt Sie über die Art, den Umfang und Zweck
        der Verarbeitung personenbezogener Daten auf dieser Website auf.
      </p>

      <h2>1. Verantwortliche Stelle</h2>
      <p>
        Jens Bormann<br />
        Rumpfstraße 4<br />
        99986 Niederdorla<br />
        E-Mail: info@siebmaldurch.de
      </p>

      <h2>2. Hosting über Vercel</h2>
      <p>
        Diese Website wird bei Vercel Inc. (San Francisco, USA) gehostet.
        Beim Zugriff auf die Seite verarbeitet Vercel automatisch technische
        Daten (z. B. IP-Adresse, Browsertyp, Datum/Uhrzeit). Diese Verarbeitung
        ist notwendig, um die Website bereitzustellen.
      </p>
      <p>
        Weitere Informationen:{" "}
        <a
          href="https://vercel.com/legal/privacy-policy"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://vercel.com/legal/privacy-policy
        </a>
      </p>

      <h2>3. Erhebung und Speicherung personenbezogener Daten</h2>
      <p>
        Die Nutzung dieser Website ist grundsätzlich ohne Angabe
        personenbezogener Daten möglich. Daten werden nur verarbeitet,
        wenn Sie aktiv Informationen eingeben (z. B. Suchanfragen).
      </p>

      <h2>4. Logfiles</h2>
      <p>
        Der Hostinganbieter protokolliert automatisch Server-Logfiles.
        Dazu gehören:
      </p>
      <ul>
        <li>IP-Adresse</li>
        <li>Browsertyp und Browserversion</li>
        <li>verwendetes Betriebssystem</li>
        <li>Zugriffszeitpunkt</li>
        <li>besuchte Seiten</li>
      </ul>
      <p>
        Diese Daten sind nicht bestimmten Personen zuordenbar und dienen
        ausschließlich technischen und sicherheitsrelevanten Zwecken.
      </p>

      <h2>5. Cookies</h2>
      <p>
        Diese Website verwendet selbst keine Cookies.
        Drittanbieter, insbesondere Amazon, können jedoch Cookies setzen,
        sobald Sie einem Affiliate-Link folgen.
      </p>

      <h2>6. Amazon-Partnerprogramm</h2>
      <p>
        Wir nehmen am Amazon EU-Partnerprogramm teil. Auf dieser Website werden
        Links eingebettet, über die wir an qualifizierten Verkäufen verdienen.
        Amazon setzt Cookies ein, um die Herkunft der Bestellungen
        nachvollziehen zu können.
      </p>
      <p>
        Verantwortlich für die Datenverarbeitung im Rahmen des Partnerprogramms
        ist Amazon Europe Core S.à r.l., 38 avenue John F. Kennedy, L-1855
        Luxemburg.
      </p>
      <p>
        Weitere Informationen:{" "}
        <a
          href="https://www.amazon.de/gp/help/customer/display.html?nodeId=201909010"
          target="_blank"
          rel="noopener noreferrer"
        >
          Amazons Datenschutzerklärung
        </a>
      </p>

      <h2>7. Rechte der Nutzer</h2>
      <p>Sie haben jederzeit das Recht auf:</p>
      <ul>
        <li>Auskunft über gespeicherte Daten</li>
        <li>Berichtigung unrichtiger Daten</li>
        <li>Löschung Ihrer Daten</li>
        <li>Einschränkung der Verarbeitung</li>
        <li>Widerspruch gegen die Verarbeitung</li>
      </ul>

      <h2>8. Kontakt</h2>
      <p>
        Wenn Sie Fragen zum Datenschutz haben, wenden Sie sich bitte an die oben
        genannte Kontaktadresse.
      </p>

      <p style={{ marginTop: "40px", opacity: 0.7, fontSize: "14px" }}>
        Quelle teilweise: datenschutz-generator.de und e-recht24.de
      </p>
    </div>
  );
}

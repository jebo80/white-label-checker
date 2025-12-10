function Navigation() {
  const { dark, setDark } = useContext(ThemeContext);

  const headerBar = {
    background: dark ? "#222" : "#ffffff",
    borderBottom: dark ? "1px solid #333" : "1px solid #e0e0e0",
    padding: "12px 0",
    position: "sticky",
    top: 0,
    zIndex: 200,
    transition: "0.3s"
  };

  const navContainer = {
    maxWidth: "1100px",
    margin: "0 auto",
    padding: "0 20px",
    display: "flex",
    alignItems: "center"
  };

  const leftNav = {
    display: "flex",
    alignItems: "center",
    gap: "20px"
  };

  const navItem = {
    textDecoration: "none",
    color: dark ? "#ddd" : "#333",
    fontSize: "17px",
    fontWeight: "500"
  };

  const logoLink = {
    textDecoration: "none",
    color: dark ? "#58a6ff" : "#0070f3",
    fontSize: "22px",
    fontWeight: "bold",
    marginRight: "25px"
  };

  const amazonBtn = {
    padding: "8px 14px",
    background: "#ff9900",
    borderRadius: "6px",
    color: "black",
    fontWeight: "bold",
    border: "none",
    cursor: "pointer"
  };

  const toggleBtn = {
    padding: "6px 14px",
    background: dark ? "#444" : "#eee",
    borderRadius: "6px",
    border: "none",
    cursor: "pointer",
    color: dark ? "white" : "black",
    marginLeft: "auto" // ⭐ WICHTIG: Schiebt den Switch ganz nach rechts
  };

  return (
    <header style={headerBar}>
      <div style={navContainer}>

        {/* Linke Seite */}
        <div style={leftNav}>
          <Link to="/" style={logoLink}>White Label Checker</Link>
          <Link to="/" style={navItem}>Startseite</Link>
          <Link to="/info" style={navItem}>Info</Link>

          <a
            href="https://www.amazon.de/?tag=whitelabelche-21"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button style={amazonBtn}>Amazon</button>
          </a>
        </div>

        {/* Rechte Seite */}
        <button onClick={() => setDark(!dark)} style={toggleBtn}>
          {dark ? "☀️ Hell" : "🌙 Dunkel"}
        </button>
      </div>
    </header>
  );
}

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [dark, setDark] = useState(
    localStorage.getItem("darkMode") === "true"
  );

  useEffect(() => {
    document.body.className = dark ? "dark" : "";
    localStorage.setItem("darkMode", dark);
  }, [dark]);

  return (
    <header className="header">
      <h1>Task Tracker</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/stats">Stats</Link>
        <button onClick={() => setDark(!dark)}>
          {dark ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>
      </nav>
    </header>
  );
}

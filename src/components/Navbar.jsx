import { useApp } from "../context/AppContext";

function Navbar() {
  const { idioma, setIdioma } = useApp();

  return (
    <nav className="navbar">
      <div className="nav-content">
        <h1 className="logo">TikTok DL</h1>

        <select
          value={idioma}
          onChange={(e) => setIdioma(e.target.value)}
          className="lang-select"
        >
          <option value="es">🇪🇸 ES</option>
          <option value="en">🇺🇸 EN</option>
          <option value="pt">🇧🇷 PT</option>
        </select>
      </div>
    </nav>
  );
}

export default Navbar;
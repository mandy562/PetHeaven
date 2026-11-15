import { NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar({ currentUser, onLogout }) {
  const navigate = useNavigate();

  function handleLogout() {
    onLogout();
    navigate("/", { replace: true });
  }

  return (
    <header className="site-header">
      <a href="/" className="site-logo">
        <img src="/images/logo.png" alt="Pet Heaven"/>
      </a>

      <nav className="main-nav">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/aboutus">About Us</NavLink>
        <NavLink to="/adopt">Adoption</NavLink>
        <NavLink to="/release">Release</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>

      {currentUser ? (
        <button
          className="nav-adopt-btn"
          onClick={handleLogout}
        >
          Logout
        </button>
      ) : (
        <NavLink to="/login" className="nav-adopt-btn">
          Login/Sign Up
        </NavLink>
      )}
    </header>
  );
}

export default Navbar;
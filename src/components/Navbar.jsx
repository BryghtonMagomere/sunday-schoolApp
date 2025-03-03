import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <Link to="/" className="logo">
          🌟 Sunday School
        </Link>

        {/* Burger Menu Icon - Hidden on Large Screens */}
        <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
          <div className={`bar ${isOpen ? "open" : ""}`}></div>
          <div className={`bar ${isOpen ? "open" : ""}`}></div>
          <div className={`bar ${isOpen ? "open" : ""}`}></div>
        </div>

        {/* Navigation Links */}
        <ul className={`nav-menu ${isOpen ? "active" : ""}`}>
          <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
          <li><Link to="/classes" onClick={() => setIsOpen(false)}>Classes</Link></li>
          <li><Link to="/lessons" onClick={() => setIsOpen(false)}>Lessons</Link></li>
          <li><Link to="/teachers" onClick={() => setIsOpen(false)}>Teachers</Link></li>
          <li><Link to="/parents" onClick={() => setIsOpen(false)}>Parents</Link></li>
          <li><Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

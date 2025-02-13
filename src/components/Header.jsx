import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Optionally, close the menu when a nav link is clicked
  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="brand">
        <h1 className="siteTitle">DishDelights</h1>
        <p className="tagline">EASY AT-HOME RECIPES</p>
      </div>
      {/* Hamburger button for small screens */}
      <button className="hamburger" onClick={toggleMenu}>
        &#9776;
      </button>
      <nav className={`nav ${menuOpen ? 'open' : ''}`}>
        <Link to="/" className="link" onClick={closeMenu}>Home</Link>
        <Link to="/recipes" className="link" onClick={closeMenu}>DishDelights Recipes</Link>
        <Link to="/favorites" className="link" onClick={closeMenu}>Personal Favorites</Link>
        <Link to="/about" className="link" onClick={closeMenu}>About</Link>
        <Link to="/contact" className="link" onClick={closeMenu}>Contact</Link>
      </nav>
    </header>
  );
}

export default Header;

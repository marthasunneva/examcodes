import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
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
        <NavLink
          to="/"
          className="link"
          onClick={closeMenu}
          style={({ isActive }) =>
            isActive ? { ...activeStyle } : undefined
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/recipes"
          className="link"
          onClick={closeMenu}
          style={({ isActive }) =>
            isActive ? { ...activeStyle } : undefined
          }
        >
          DishDelights Recipes
        </NavLink>
        <NavLink
          to="/favorites"
          className="link"
          onClick={closeMenu}
          style={({ isActive }) =>
            isActive ? { ...activeStyle } : undefined
          }
        >
          Personal Favorites
        </NavLink>
        <NavLink
          to="/about"
          className="link"
          onClick={closeMenu}
          style={({ isActive }) =>
            isActive ? { ...activeStyle } : undefined
          }
        >
          About
        </NavLink>
        <NavLink
          to="/contact"
          className="link"
          onClick={closeMenu}
          style={({ isActive }) =>
            isActive ? { ...activeStyle } : undefined
          }
        >
          Contact
        </NavLink>
      </nav>
    </header>
  );
}

const activeStyle = {
  color: '#FF6F00', // Hover/active color
};

export default Header;

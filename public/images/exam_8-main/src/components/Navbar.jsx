import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="header">
      <nav className="nav">
        <Link to={"/"}>
          <img src="/images/logo.svg" alt="Healthy Recipe Rinder" />
        </Link>
        <div className="burger-icon" onClick={toggleMenu}>
          <FaBars />
        </div>
        <ul className={`nav__list ${isOpen ? "open" : ""}`}>
          <li className="nav__list-item">
            <NavLink to={"/"}>Home</NavLink>
            <span className="line"></span>
          </li>
          <li className="nav__list-item">
            <NavLink to="/about">About</NavLink>
            <span className="line"></span>
          </li>
          <li className="nav__list-item">
            <NavLink to="/recipes">Recipes</NavLink>
            <span className="line"></span>
          </li>
          <li className="nav__list-item">
            <NavLink to="/create">Create</NavLink>
            <span className="line"></span>
          </li>
          {isOpen && (
            <li className="nav__list-item nav-btn-item">
              <Link to="/recipes" className="nav-btn btn">
                Browse recipes
              </Link>
            </li>
          )}
        </ul>
        <div className="nav-btn-container">
          <Link to="/recipes" className="nav-btn btn">
            Browse recipes
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;

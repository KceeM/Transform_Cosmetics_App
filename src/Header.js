import React from "react";
import { Link } from "react-router-dom";
import logo from "./images/logo1.png"; 
import "./Header.css"; 

function Header() {
  return (
    <header className="header">
      <div className="logo-section">
        <img src={logo} alt="Transform Cosmetics Logo" className="logo" />
        <h1 className="brand-name">Transform Cosmetics</h1>
      </div>
      <nav className="nav-links">
        <Link to="/">Shop</Link>
        <Link to="/about">About</Link>
        <Link to="/sets">Sets</Link>
        <Link to="/quiz">Quiz</Link>
        <Link to="/wholesale">Wholesale</Link>
        <Link to="/courses">Courses</Link>
        <Link to="/wishlist">Wishlist</Link>
        <Link to="/cart">Cart</Link>
      </nav>
    </header>
  );
}

export default Header;

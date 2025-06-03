import React from "react";
import { Link } from "react-router-dom";
import logo from "./images/logo1.png"; 
import cartIcon from "./images/Icons/Cart1.png";
import heartIcon from "./images/Icons/Heart1.png";
import "./Header.css"; 
import HeaderIcons from "./components/HeaderIcons";

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
      </nav>

      <div className="header-icons">
        <Link to="/wishlist" className="icon-link">
          <img src={heartIcon} alt="wishlist" />
          <span>Wishlist</span>
        </Link>
        <Link to="/cart" className="icon-link">
          <img src={cartIcon} alt="cart" />
          <span>Cart</span>
        </Link>
      </div>
    </header>
  );
}

export default Header;

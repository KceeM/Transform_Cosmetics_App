import React from "react";
import { Link } from "react-router-dom";
import cartIcon from "../images/Icons/Cart1.png";
import heartIcon from "../images/Icons/Heart1.png";
import "./HeaderIcons.css";

function HeaderIcons() {
  return (
    <div className="header-icons">
      <Link to="/wishlist" className="icon-link">
        <img src={heartIcon} alt="Wishlist" />
        <span>Wishlist</span>
      </Link>
      <Link to="/cart" className="icon-link">
        <img src={cartIcon} alt="Cart" />
        <span>Cart</span>
      </Link>
    </div>
  );
}

export default HeaderIcons;

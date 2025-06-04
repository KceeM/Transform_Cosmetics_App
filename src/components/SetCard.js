import React from "react";
import "../pages/Sets.css"; 
import heart from "../images/Icons/Heart1.png";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function SetCard({ set, onViewInfo }) {
  const { addToCart, addToWishlist } = useContext(CartContext);

  return (
    <div className="set-card">
      <div className="wishlist-icon" onClick={() => addToWishlist(set)}>
        <img src={heart} alt="wishlist" />
      </div>

      <div className="set-image-wrapper">
        <img src={set.image} alt={set.name} />
        <div className="hover-details">
          <ul>
            {set.includes.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      <h3>{set.name}</h3>
      <p>{set.description}</p>
      <p className="set-price">R{set.price}</p>

      <div className="set-buttons">
        <button className="view-info" onClick={() => onViewInfo(set)}>
          View Info
        </button>
        <button onClick={() => addToCart(set)}>Add to Cart</button>
      </div>
    </div>
  );
}

export default SetCard;

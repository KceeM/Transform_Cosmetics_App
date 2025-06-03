import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "./Wishlist.css";

function Wishlist() {
  const { wishlistItems, removeFromWishlist, addToCart } = useContext(CartContext);

  return (
    <div className="wishlist-page">
      <h2>Your Wishlist</h2>
      {wishlistItems.length === 0 ? (
        <p>Your wishlist is empty.</p>
      ) : (
        <ul className="wishlist-list">
          {wishlistItems.map((item, index) => (
            <li key={index} className="wishlist-item">
              <img src={item.image} alt={item.name} />
              <div>
                <h4>{item.name}</h4>
                <p>R{item.price}</p>
                <button onClick={() => addToCart(item)}>Add to Cart</button>
                <button onClick={() => removeFromWishlist(item.id)}>Remove</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Wishlist;

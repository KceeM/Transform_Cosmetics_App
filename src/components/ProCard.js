import React from "react";
import { Link } from "react-router-dom";
import "./productCard.css";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import heart from "../images/Icons/Heart1.png";

function ProductCard({ product }) {

  const { addToCart, addToWishlist } = useContext(CartContext);

  return (
    <div className="product-card">
      <div className="wishlist-icon" onClick={() => addToWishlist(product)}>
        <img src={heart} alt="wishlist" />
      </div>
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>R{product.price}</p>
      <div className="button">
        <button onClick={() => addToCart(product)}>Add to Cart</button>
        
      </div>
      
      <div className="button">
        
        <Link to={`/product/${product.id}`}>
          <button className="view-btn">View Details</button>
        </Link>
      </div>
    </div>
  );
}

export default ProductCard;

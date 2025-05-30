import React from "react";
import { Link } from "react-router-dom";
import "./productCard.css";

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>R{product.price}</p>
      <div className="buttons">
        <button>Add to Cart</button>
        <Link to={`/product/${product.id}`}>
          <button className="view-btn">View Details</button>
        </Link>
      </div>
    </div>
  );
}

export default ProductCard;

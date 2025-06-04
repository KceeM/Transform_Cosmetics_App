import React from "react";
import { useParams } from "react-router-dom";
import products from "../data/products";
import "./ProductDetails.css";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";


function ProductDetails() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);


  if (!product) {
    return <p>Product not found.</p>;
  }

  return (
    <div className="product-detail">
      <img src={product.image} alt={product.name} className="product-img" />
      <div className="product-info">
        <h2>{product.name}</h2>
        <p className="product-price">R{product.price}</p>
        <p className="product-description">{product.description}</p>
        

        <h4>Benefits:</h4>
        <ul>
          {product.benefits.map((benefit, index) => (
            <li key={index}>{benefit}</li>
          ))}
        </ul>

        <h4>How to Use:</h4>
        <p>{product.usage}</p>

        <button onClick={() => addToCart(product)}>Add to Cart</button>

        <button className="back-button" onClick={() => navigate("/")}>
          ← Back to Shop
        </button>

      </div>
    </div>
  );
}

export default ProductDetails;

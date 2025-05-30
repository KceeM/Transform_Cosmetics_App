import React from "react";
import products from "../data/products";
import ProductCard from "../components/ProCard";
import "./Shop.css";

function Shop() {
  const skinProducts = products.filter(p => p.category === "Skin");
  const hairProducts = products.filter(p => p.category === "Hair");
  const bestseller = products.filter(p => p.category === "Bestseller");

  return (
    <div className="shop">
      <h2>Skin Products</h2>
      <div className="product-grid">
        {skinProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <h2>Hair Products</h2>
      <div className="product-grid">
        {hairProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <h2>Bestsellers</h2>
      <div className="product-grid">
        {bestseller.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Shop;


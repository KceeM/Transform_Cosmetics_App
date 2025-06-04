import React from "react";
import { useLocation } from "react-router-dom";
import sets from "../data/sets";
import products from "../data/products"; 
import ProductCard from "../components/ProCard";
import SetCard from "../components/SetCard";
 

function SearchResults() {
  const query = new URLSearchParams(useLocation().search).get("q")?.toLowerCase() || "";

  const matchedSets = sets.filter(set =>
    set.name.toLowerCase().includes(query) ||
    set.description.toLowerCase().includes(query)
  );

  const matchedProducts = products.filter(product =>
    (
    product.name.toLowerCase().includes(query) ||
    product.description?.toLowerCase().includes(query) 
    
    ) && product.category !== "Bestseller"
  );

  return (
    <div className="search-results">
      <h2>Results for "{query}"</h2>

      {matchedSets.length === 0 && matchedProducts.length === 0 ? (
        <p>No results found.</p>
      ) : (
        <>
          <h3>Matching Sets</h3>
          <div className="set-grid">
            {matchedSets.map(set => (
              <SetCard key={set.id} set={set} />
            ))}
          </div>

          <h3>Matching Products</h3>
          <div className="product-grid">
            {matchedProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default SearchResults;

import React, { useContext, useState } from "react";
import "./Wholesale.css";
import { CartContext } from "../context/CartContext";
import wholesaleProducts from "../data/wholesale";
import ImageModal from "../components/ImageModal"; 
import InquiryModal from "../components/InquiryModal";


function Wholesale() {
  const { addToCart } = useContext(CartContext);
  const [selectedImage, setSelectedImage] = useState(null);
  const [showInquiry, setShowInquiry] = useState(false);


  return (
    <div className="wholesale-page">
      {/* Intro Section */}
      <section className="wholesale-intro">
        <h1>Partner with Transform Cosmetics</h1>
        <p>
          Are you a small business owner looking to expand your product range with high-quality, ready - made skincare and haircare?
          Our wholesale and private labeling options give you everything you need to succeed  -  from premium bulk formulas to fully customizable branding.
        </p>
      </section>

      {/* Wholesale Products Section */}
      <section className="wholesale-products">
        <h2>Wholesale Bulk Products</h2>
        <p>Available in 5L buckets. Perfect for resellers, spas, salons, and boutique brands who want reliable, affordable base products.</p>

        <div className="product-grid">
          {wholesaleProducts.map(product => (
            <div className="wholesale-card" key={product.id}>
              <div className="image-container" onClick={() => setSelectedImage(product.image)}>
                <img src={product.image} alt={product.name} />
                <span className="hover-label">Click to enlarge</span>
              </div>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p className="wholesale-price">R{product.price}</p>
              <button onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
          ))}
        </div>
      </section>

      {/* Private Labeling Section */}
      <section className="private-labeling">
        <h2>Private Labeling Options</h2>
        <p>
          Want to sell your own brand without the hassle of manufacturing?
          Our private label service allows you to order high-performing products in batches of 12-24 with your own label. We handle production  -  you focus on branding.
        </p>

        <div className="private-label-info">
          <ul>
            <li>✓ Choose from our best-selling formulations</li>
            <li>✓ Submit your label design or request design help</li>
            <li>✓ Minimum order: 12 units per product</li>
            <li>✓ Perfect for growing brands, spas, markets, and gift boxes</li>
          </ul>
          <button className="inquiry-btn" onClick={() => setShowInquiry(true)}>
            Inquire Now
          </button>

        </div>
      </section>

      {/* Modal */}
      {selectedImage && <ImageModal image={selectedImage} onClose={() => setSelectedImage(null)} />}

      {showInquiry && <InquiryModal onClose={() => setShowInquiry(false)} />}

    </div>
  );
}

export default Wholesale;


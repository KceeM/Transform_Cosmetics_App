import React from 'react';
import { Link } from 'react-router-dom';
import videoSrc from '../images/vids/BodyOilAnim.mp4'; 
import './HomePage.css'; 
import products from "../data/products";
import sets from "../data/sets";
import ProductCard from "../components/ProCard";
import SetCard from "../components/SetCard";


const HomePage = () => {
  return (
    <div className="homepage">
      {/* Video Banner */}
      <div className="video-banner">
        <video autoPlay loop muted playsInline className="background-video">
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="banner-content">
          <h1>Welcome to Transform Cosmetics</h1>
          <p>Discover your beauty transformation journey.</p>
        </div>
      </div>

      {/* Bestsellers Section */}
      <section className="bestsellers">
        <h2 className="section-title">Bestsellers</h2>
        <div className="product-grid">
          {products
            .filter(p => p.category === "Bestseller")
            .slice(0, 4)
            .map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
        </div>
        <Link to="/shop" className="see-more">Explore Products → </Link>
      </section>
    

      {/* Shop Sets Section */}
      <section className="shop-sets">
        <h2 className="section-title">Shop Sets</h2>
        <div className="product-grid">
          {sets.slice(0, 4).map(set => (
             <SetCard key={set.id} set={set} />
            ))}
        </div>
        <Link to="/sets" className="see-more">Explore Sets → </Link>
      </section>

      {/* Transform Me Quiz Section */}
      <section className="quiz-cta">
        <h2>Take the Transform Me Quiz</h2>
        <p>Find the perfect products tailored for you.</p>
        <Link to="/quiz" className="quiz-button">Start Quiz</Link>
      </section>
    </div>
  );
};

export default HomePage;

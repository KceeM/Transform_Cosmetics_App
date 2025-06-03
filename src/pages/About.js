import React from "react";
import "./About.css";
import founderImage from "../images/Icons/Founder01.png"; // placeholder path
import bannerImage from "../images/Icons/Banner8.png"; // placeholder path
import veganIcon from "../images/Icons/A1.png";
import crueltyFreeIcon from "../images/Icons/A6.png";
import handmadeIcon from "../images/Icons/A4.png";
import naturalIcon from "../images/Icons/A5.png";

function About() {
  return (
    <div className="about-page">
      <div className="about-hero">
        <img src={bannerImage} alt="Transform Cosmetics Banner" />
        <div className="hero-text">
          <h1>Our Story</h1>
          <p>Rooted in nature. Backed by results. Made with love.</p>
        </div>
      </div>

      <section className="about-section">
        <div className="about-content">
          <h2>Welcome to Transform Cosmetics</h2>
          <p>
            Transform Cosmetics was born from a personal journey — a quest to create honest, effective
            skincare and haircare products using natural, safe ingredients. It all started in a small home lab,
            where experiments turned into real results. Fueled by curiosity and a passion for clean beauty,
            I began crafting products for friends and family. Word spread, and Transform Cosmetics was born.
          </p>
          <p>
            Every product is handmade in small batches, using ethically sourced oils, clays, actives, and butters.
            We focus on performance, transparency, and transformation — whether it's clearing acne, boosting glow,
            or nurturing your curls.
          </p>
          <p>
            Today, Transform Cosmetics is more than just a brand — it's a community for anyone who wants
            to love their skin naturally. We believe in affordable luxury, conscious beauty, and glowing results.
          </p>
        </div>
        <div className="about-image">
          <img src={founderImage} alt="Founder of Transform Cosmetics" />
        </div>
      </section>

      <section className="about-values">
        <h2>Our Values</h2>
        <div className="values-grid">
          <div className="value-item">
            <img src={veganIcon} alt="Vegan" />
            <p>100% Vegan</p>
          </div>
          <div className="value-item">
            <img src={crueltyFreeIcon} alt="Cruelty-Free" />
            <p>Always Cruelty-Free</p>
          </div>
          <div className="value-item">
            <img src={handmadeIcon} alt="Handmade" />
            <p>Small-Batch Handmade</p>
          </div>
          <div className="value-item">
            <img src={naturalIcon} alt="Natural" />
            <p>Natural Actives</p>
          </div>
        </div>
      </section>

      <section className="about-mission">
        <h2>Why Choose Transform Cosmetics?</h2>
        <p>
          We don’t just make products — we make experiences. Every formula is tested, refined, and
          made with intention. Whether you're healing, glowing, or just starting out — we’re here
          to help you transform.
        </p>
      </section>
    </div>
  );
}

export default About;



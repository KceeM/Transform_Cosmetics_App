import React from "react";
import sets from "../data/sets";
import "./Sets.css";
import SetModal from "../components/SetModal";
import { useState } from "react";


function Sets() {
  // this groups sets by keywords
  const acneGlowSets = sets.filter(set =>
    set.concern.toLowerCase().includes("acne") ||
    set.concern.toLowerCase().includes("clarifying") ||
    set.concern.toLowerCase().includes("glow")
  );

  const evenGlowSets = sets.filter(set =>
    set.concern.toLowerCase().includes("even skin")
  );

  const moistureBodySets = sets.filter(set =>
    set.concern.toLowerCase().includes("moisture") &&
    set.concern.toLowerCase().includes("body")
  );

  const hairGrowthSets = sets.filter(set =>
    set.concern.toLowerCase().includes("hair growth")
  );

  const fullHairRegimen = sets.filter(set =>
    set.concern.toLowerCase().includes("full regimen")
  );

  const hairStylingSets = sets.filter(set =>
    set.concern.toLowerCase().includes("styling")
  );

  const [selectedSet, setSelectedSet] = useState(null);


  const renderSetSection = (title, data) => (
    <section className="set-section">
      <h2>{title}</h2>
        <div className="set-grid">
         {data.map(set => (
            <div className="set-card" key={set.id}>
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
                  <button className="view-info" onClick={() => setSelectedSet(set)}>View Info</button>
                  <button>Add to Cart</button>
                </div>
           </div>

          ))}
        </div>
    </section>
  );

  return (
    <div className="sets-page">
      {renderSetSection("1. Acne Repair, Skin Clarifying & Glow", acneGlowSets)}
      {renderSetSection("2. Glow Enhancing & Even Skin", evenGlowSets)}
      {renderSetSection("3. Moisture Care – Body Butters and Oils", moistureBodySets)}
      {renderSetSection("4. Hair Growth & Damage Repair", hairGrowthSets)}
      {renderSetSection("5. Full Hair Care Regimen", fullHairRegimen)}
      {renderSetSection("6. Styling & Moisture Care", hairStylingSets)}
      {selectedSet && <SetModal setData={selectedSet} onClose={() => setSelectedSet(null)} />}

    </div>
  );
}

export default Sets;

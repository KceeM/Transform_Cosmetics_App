import React from "react";
import "./SetModal.css";

function SetModal({ setData, onClose }) {
  if (!setData) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>{setData.name}</h2>
        <p><strong>Description:</strong> {setData.description}</p>
        <h4>Routine:</h4>
        <ul>
          {setData.details?.routine.map((step, idx) => (
            <li key={idx}>{step}</li>
          ))}
        </ul>
        <h4>Bentonite Clay Mask Instructions:</h4>
        <p>{setData.details?.maskUsage}</p>
        <button onClick={onClose} className="close-btn">Close</button>
      </div>
    </div>
  );
}

export default SetModal;

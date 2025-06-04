import React from "react";
import "./ImageModal.css";

function ImageModal({ image, onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <img src={image} alt="Product Preview" />
        <button className="close-btn" onClick={onClose}>×</button>
      </div>
    </div>
  );
}

export default ImageModal;

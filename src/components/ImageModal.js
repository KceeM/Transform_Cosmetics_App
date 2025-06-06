import React from "react";
import "./ImageModal.css";

function ImageModal({ image, onClose }) {
  return (
    <div className="modal-overlayy" onClick={onClose}>
      <div className="modal-contentt" onClick={(e) => e.stopPropagation()}>
        <img src={image} alt="Product Preview" />
        <button className="close-btnn" onClick={onClose}>×</button>
      </div>
    </div>
  );
}

export default ImageModal;

import React from "react";
import "./InquiryModal.css";
import { toast } from "react-toastify";


function InquiryModal({ onClose }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Thanks for your inquiry! We'll get back to you soon.", {
        position: "top-center",
        autoClose: 5000,
        className: "inquiry-toast",
    });
    onClose();

  };

  return (
    <div className="inquiry-overlay">
      <div className="inquiry-modal">
        <button className="close-btnnn" onClick={onClose}>x</button>
        <h2>Private Label Inquiry</h2>
        <form onSubmit={handleSubmit} className="inquiry-form">
          <label>
            Name:
            <input type="text" required />
          </label>
          <label>
            Email:
            <input type="email" required />
          </label>
          <label>
            Business Name:
            <input type="text" />
          </label>
          <label>
            What are you interested in?
            <textarea rows="4" placeholder="E.g. I’d like 24 jars of turmeric butter with my brand." required />
          </label>
          <button type="submit" className="submit-btn">Submit Inquiry</button>
        </form>
      </div>
    </div>
  );
}

export default InquiryModal;

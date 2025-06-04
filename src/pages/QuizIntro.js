import React from "react";
import "./QuizIntro.css";
import { useNavigate } from "react-router-dom";
import skinIcon from "../images/Icons/QuizSkin.png";
import hairIcon from "../images/Icons/QuizHair.png";

function QuizIntro() {
  const navigate = useNavigate();

  return (
    <div className="quiz-intro-page">
      <div className="intro-text">
        <h1 className="animate-text">Take the Transform Me Quiz</h1>
        <p>Find your perfect skincare or haircare set tailored to your unique needs!</p>
      </div>

      <div className="quiz-options">
        <div className="quiz-card" onClick={() => navigate("/quiz/skin")}>
          <img src={skinIcon} alt="Skin Quiz" />
          <h2>Skin</h2>
        </div>

        <div className="quiz-card" onClick={() => navigate("/quiz/hair")}>
          <img src={hairIcon} alt="Hair Quiz" />
          <h2>Hair</h2>
        </div>
      </div>
    </div>
  );
}

export default QuizIntro;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./QuizForm.css";

function SkinQuiz() {
  const navigate = useNavigate();
  const [answers, setAnswers] = useState({
    type: "",
    concern: "",
    actives: "",
    toner: ""
  });

  const handleChange = (e) => {
    setAnswers({ ...answers, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("quizType", "skin");
    localStorage.setItem("quizAnswers", JSON.stringify(answers));
    navigate("/quiz/result");
  };

  return (
    <div className="quiz-page">
      <h2>Skin Quiz</h2>
      <form onSubmit={handleSubmit} className="quiz-form">
        <label>
          What is your skin type?
          <select name="type" onChange={handleChange} required>
            <option value="">Select</option>
            <option value="oily">Oily</option>
            <option value="dry">Dry</option>
            <option value="combination">Combination</option>
            <option value="sensitive">Sensitive</option>
          </select>
        </label>

        <label>
          What are your main skin concerns?
          <select name="concern" onChange={handleChange} required>
            <option value="">Select</option>
            <option value="acne">Acne & Breakouts</option>
            <option value="even-tone">Uneven Skin Tone</option>
            <option value="glow">Dullness / Lack of Glow</option>
          </select>
        </label>

        <label>
          Are you okay with active ingredients (e.g. Vitamin C)?
          <select name="actives" onChange={handleChange} required>
            <option value="">Select</option>
            <option value="yes">Yes, I’m okay with actives</option>
            <option value="no">No, I prefer gentle/natural</option>
          </select>
        </label>

        <label>
          Do you already use a toner?
          <select name="toner" onChange={handleChange} required>
            <option value="">Select</option>
            <option value="yes">Yes, I already have one</option>
            <option value="no">No, please include one</option>
          </select>
        </label>

        <button type="submit">See My Set</button>
      </form>
    </div>
  );
}

export default SkinQuiz;



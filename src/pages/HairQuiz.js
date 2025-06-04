import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./QuizForm.css";

function HairQuiz() {
  const navigate = useNavigate();
  const [answers, setAnswers] = useState({
    goal: "",
    routine: "",
    styling: "",
    wash: ""
  });

  const handleChange = (e) => {
    setAnswers({ ...answers, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("quizType", "hair");
    localStorage.setItem("quizAnswers", JSON.stringify(answers));
    navigate("/quiz/result");
  };

  return (
    <div className="quiz-page">
      <h2>Hair Quiz</h2>
      <form onSubmit={handleSubmit} className="quiz-form">
        <label>
          What is your main hair goal?
          <select name="goal" onChange={handleChange} required>
            <option value="">Select</option>
            <option value="growth">Hair Growth</option>
            <option value="breakage">Breakage Repair</option>
            <option value="moisture">Deep Moisture</option>
          </select>
        </label>

        <label>
          How do you maintain your hair?
          <select name="routine" onChange={handleChange} required>
            <option value="">Select</option>
            <option value="washday">Wash Day Routine</option>
            <option value="protective">Protective Styles</option>
          </select>
        </label>

        <label>
          Do you need styling products (curling/activators)?
          <select name="styling" onChange={handleChange} required>
            <option value="">Select</option>
            <option value="yes">Yes, I want styling help</option>
            <option value="no">No, not needed</option>
          </select>
        </label>

        <label>
          Do you want shampoo and conditioner included?
          <select name="wash" onChange={handleChange} required>
            <option value="">Select</option>
            <option value="yes">Yes, include wash day items</option>
            <option value="no">No, not needed</option>
          </select>
       </label>

        <button type="submit">Show My Set</button>
      </form>
    </div>
  );
}

export default HairQuiz;

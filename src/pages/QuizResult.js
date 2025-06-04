import React from "react";
import sets from "../data/sets";
import { useNavigate } from "react-router-dom";
import "./QuizResult.css";

function QuizResult() {
  const navigate = useNavigate();

  const type = localStorage.getItem("quizType");
  const answers = JSON.parse(localStorage.getItem("quizAnswers"));

  let recommendedSets = [];

  if (type === "skin" && answers) {
    const { concern, actives } = answers;

    recommendedSets = sets.filter(set => {
      if (!set.quizConcern) return false;

      const hasConcernMatch = set.quizConcern.includes(concern);

      const hasActiveMatch = actives === "yes"
         ? set.quizConcern.includes("actives")
         : set.quizConcern.includes("no-actives");

      const hasTonerMatch = answers.toner === "no"
         ? !set.quizConcern.includes("no-toner")  
         : set.quizConcern.includes("no-toner");  

      return hasConcernMatch && hasActiveMatch && hasTonerMatch;
    });
  }

  if (type === "hair" && answers) {
  const { goal, routine, styling, wash } = answers;

  recommendedSets = sets
    .map(set => {
      if (!set.quizConcern) return null;

      let score = 0;

      if (set.quizConcern.includes(goal)) score++;
      if (set.quizConcern.includes(routine)) score++;
      if (styling === "yes" && set.quizConcern.includes("styling")) score++;
      if (wash === "yes" && set.quizConcern.includes("washday")) score++;
      if (wash === "no" && !set.quizConcern.includes("washday")) score++;

      return { ...set, matchScore: score };
    })
    .filter(set => set && set.matchScore >= 2) // Keep best matches only
    .sort((a, b) => b.matchScore - a.matchScore); // Higher match score = higher priority
   }


  return (
    <div className="quiz-result">
      <h2>Your Recommended Set(s)</h2>
      <p>Based on your answers, here are the sets we suggest:</p>

      <div className="set-grid">
        {recommendedSets.length > 0 ? (
          recommendedSets.map(set => (
            <div className="set-card" key={set.id}>
              <img src={set.image} alt={set.name} />
              <h3>{set.name}</h3>
              <p>{set.description}</p>
              <p className="set-price">R{set.price}</p>
              <button onClick={() => navigate("/sets")}>View Set</button>
            </div>
          ))
        ) : (
          <p>
            No perfect match found. You can always{" "}
            <span
              onClick={() => navigate("/sets")}
              style={{ color: "#111", cursor: "pointer", textDecoration: "underline" }}
            >
              browse all our sets here.
            </span>
          </p>
        )}
      </div>
    </div>
  );
}

export default QuizResult;


import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const Question = ({ question, answer }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="container text-center mt-3">
      <div
        className="d-flex justify-content-between align-items-center p-3 border rounded bg-light"
        onClick={() => setIsVisible(!isVisible)}
        style={{ cursor: "pointer", fontFamily: "Arial, sans-serif" }}
      >
        <h2 className="mb-0 text-primary text-start">{question}</h2>
        <button className="btn btn-primary">{isVisible ? <Minus size={20} /> : <Plus size={20} />}</button>
      </div>
      {isVisible && (
        <div className="mt-3 p-3 bg-light border rounded text-start" style={{ fontFamily: "Arial, sans-serif", fontSize: "1.2rem", color: "#333" }}>
          {answer.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      )}
    </div>
  );
};

export default Question;
import "./single-quiz-card.css";
import { MdCheckCircleOutline, CgCloseO } from "../../icons/icons";
import { useEffect, useState } from "react";
import { getQuestion } from "../../features/questionSlice/questionSlice";
import { useDispatch, useSelector } from "react-redux";

const SingleQuizCard = ({ data }) => {
  const [queNum, setQueNum] = useState(0);

  return (
    <div className="single-quiz-card">
      <div className="card-head">
        <h2 className="card-title"> {data.title} Quiz</h2>
        <div className="time-container">
          <h3 className="time-counter">10</h3>
        </div>
      </div>
      <div className="card-body">
        <h3 className="question">{data.mcqs[queNum].question}</h3>
        <ul className="options-container">
          {data.mcqs[queNum].options.map((x) => (
            <li className="options">{x}</li>
          ))}
        </ul>
      </div>
      <div className="card-footer">
        <div className="question-count-container">
          <h4 className="question-count">1 of {data.questions} Questions</h4>
        </div>
        <button
          className="next-question-btn"
          onClick={() => setQueNum((prev) => (prev += 1))}
        >
          Next Que
        </button>
      </div>
    </div>
  );
};

export default SingleQuizCard;

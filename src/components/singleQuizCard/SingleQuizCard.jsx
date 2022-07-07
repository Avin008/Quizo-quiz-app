import "./single-quiz-card.css";
import { MdCheckCircleOutline, CgCloseO } from "../../icons/icons";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";

const SingleQuizCard = ({ data }) => {
  const [queNum, setQueNum] = useState(0);
  const [ans, setAns] = useState(false);

  const checkAnswer = (e) => {
    if (e === data.mcqs[queNum].answer) {
      setAns(true);
    } else {
      setAns((prev) => false);
    }
  };

  useEffect(() => {
    setAns(false);
  }, [queNum]);

  return (
    <div className="single-quiz-card">
      <div className="card-head">
        <h2 className="card-title"> {data.title}</h2>
        <div className="time-container">
          <h3 className="time-counter">10</h3>
        </div>
      </div>
      <div className="card-body">
        <h3 className="question">
          {queNum + 1}. {data.mcqs[queNum].question}
        </h3>
        <ul className="options-container">
          {data.mcqs[queNum].options.map((x) => (
            <li
              className="options"
              style={{
                background: ans
                  ? x === data.mcqs[queNum].answer
                    ? "green"
                    : ""
                  : "",
              }}
              onClick={() => checkAnswer(x)}
            >
              {x}{" "}
              {ans ? (
                x === data.mcqs[queNum].answer ? (
                  <MdCheckCircleOutline />
                ) : (
                  ""
                )
              ) : (
                ""
              )}
            </li>
          ))}
        </ul>
      </div>
      <div className="card-footer">
        <div className="question-count-container">
          <h4 className="question-count">
            {queNum + 1} of {data.mcqs.length} Questions
          </h4>
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

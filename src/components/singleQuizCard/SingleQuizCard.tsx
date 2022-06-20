import "./single-quiz-card.css";
import { MdCheckCircleOutline, CgCloseO } from "../../icons/icons";

const SingleQuizCard = () => {
  return (
    <div className="single-quiz-card">
      <div className="head">
        <h2 className="head-title">Dragon Ball Z Quiz</h2>
        <div className="time-container">
          <h3 className="time">10</h3>
        </div>
      </div>
      <div className="body">
        <h3 className="question">
          1. Lorem ipsum dolor sit amet consectetur, adipisicing elit. In, est.
        </h3>
        <ul className="options-container">
          <li className="options">
            OPTION ONE <MdCheckCircleOutline />
          </li>
          <li className="options">OPTION TWO</li>
          <li className="options">
            OPTION THREE
            <CgCloseO />
          </li>
          <li className="options">OPTION FOUR</li>
        </ul>
      </div>
      <div className="card-footer">
        <div className="question-count-container">
          <h4 className="question-count">1 of 5 Questions</h4>
        </div>
        <button className="next-question-btn">Next Que</button>
      </div>
    </div>
  );
};

export default SingleQuizCard;

import "./single-quiz-card.css";
import {
  MdCheckCircleOutline,
  CgCloseO,
  AiOutlineCloseCircle,
} from "../../icons/icons";
import { useEffect, useReducer, useRef, useState } from "react";

const SingleQuizCard = ({ data }) => {
  const [quizState, setQuizState] = useState({
    isAnswer: false,
    score: 0,
    questionNo: 0,
    userAnswer: "",
    counter: 15,
  });

  // quiz card feature steps
  // 1. when user click on the option button - set isAnswered = true
  // 2. if user clicked option === currect answer - increase score, add check icon to right answer, hightlight with green color
  // 3 if user clicked option !== currect answer - hightlight currect answer with green color
  // && highlight wrong answer with purple color &&

  const checkAnswer = (e) => {
    if (!quizState.isAnswer) {
      if (e === data.mcqs[quizState.questionNo].answer) {
        setQuizState((prev) => ({
          ...prev,
          userAnswer: e,
          score: (prev.score += 50),
          isAnswer: true,
        }));
      } else {
        setQuizState((prev) => ({ ...prev, userAnswer: e, isAnswer: true }));
      }
    }
  };

  const nextQuestFunc = () => {
    if (data.mcqs.length > quizState.questionNo + 1) {
      setQuizState((prev) => ({
        ...prev,
        questionNo: prev.questionNo + 1,
      }));
    } else {
      setQuizState((prev) => ({
        ...prev,
        questionNo: 0,
      }));
    }
  };

  const addIcon = (e) => {
    if (e === data.mcqs[quizState.questionNo].answer) {
      return <MdCheckCircleOutline />;
    } else if (e === quizState.userAnswer) {
      return <AiOutlineCloseCircle />;
    }
  };

  const hightlightAnswer = (e) => {
    if (e === data.mcqs[quizState.questionNo].answer) {
      return "purple";
    } else if (e === quizState.userAnswer) {
      return "green";
    }
  };

  useEffect(() => {
    setQuizState((prev) => ({
      ...prev,
      isAnswer: false,
      userAnswer: "",
      counter: 15,
    }));
  }, [quizState.questionNo]);

  useEffect(() => {
    const timer =
      quizState.counter > 0 &&
      setInterval(() => {
        setQuizState((prev) => ({ ...prev, counter: prev.counter - 1 }));
      }, 1000);

    if (quizState.counter <= 0) {
      nextQuestFunc();
    }

    return () => {
      clearInterval(timer);
    };
  }, [quizState.counter]);

  return (
    <div className="single-quiz-card">
      <div className="card-head">
        <h2 className="card-title"> {data.title}</h2>
        <div className="time-container">
          <h3 className="time-counter">{quizState.counter}</h3>
        </div>
      </div>
      <div className="card-body">
        <h3 className="question">
          {quizState.questionNo + 1}. {data.mcqs[quizState.questionNo].question}
        </h3>
        <ul className="options-container">
          {data.mcqs[quizState.questionNo].options.map((x) => (
            <li
              className="options"
              style={{ background: quizState.isAnswer && hightlightAnswer(x) }}
              onClick={() => {
                checkAnswer(x);
              }}
            >
              {x} {quizState.isAnswer && addIcon(x)}
            </li>
          ))}
        </ul>
      </div>
      <div className="card-footer">
        <div className="question-count-container">
          <h4 className="question-count">
            {quizState.questionNo + 1} of {data.mcqs.length} Questions
          </h4>
        </div>
        <button className="next-question-btn" onClick={() => nextQuestFunc()}>
          Next Ques
        </button>
      </div>
    </div>
  );
};

export default SingleQuizCard;

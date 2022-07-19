import "./single-quiz-card.css";
import { MdCheckCircleOutline, AiOutlineCloseCircle } from "../../icons/icons";
import { useEffect, useState } from "react";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const SingleQuizCard = ({ data }) => {
  const navigate = useNavigate();

  const [quizState, setQuizState] = useState({
    isAnswer: false,
    score: 0,
    questionNo: 0,
    userAnswer: "",
    counter: 15,
    coins: 0,
  });

  const { token } = useSelector((store) => store.auth);
  const { score, coins } = useSelector((store) => store.score);

  const updateUserScore = async (score, coins) => {
    const docRef = doc(db, "users", token);
    updateDoc(docRef, { score: score, coins: coins });
  };

  const checkAnswer = (e) => {
    if (!quizState.isAnswer) {
      if (e === data.singleQuizData.mcq[quizState.questionNo].answer) {
        setQuizState((prev) => ({
          ...prev,
          userAnswer: e,
          score: prev.score + 1,
          isAnswer: true,
          coins: prev.coins + 1,
        }));
      } else {
        setQuizState((prev) => ({ ...prev, userAnswer: e, isAnswer: true }));
      }
    }
  };

  const nextQuestFunc = () => {
    if (data.singleQuizData.mcq.length > quizState.questionNo + 1) {
      setQuizState((prev) => ({
        ...prev,
        questionNo: prev.questionNo + 1,
        isAnswer: false,
        userAnswer: "",
        counter: 15,
      }));
    } else {
      data.scoreFunc((prev) => ({
        ...prev,
        score: quizState.score,
        coins: quizState.coins,
      }));
      data.toggleFunc(true);
      updateUserScore(score + quizState.score, coins + quizState.coins);
    }
  };

  const addIcon = (e) => {
    if (e === data.singleQuizData.mcq[quizState.questionNo].answer) {
      return <MdCheckCircleOutline />;
    } else if (e === quizState.userAnswer) {
      return <AiOutlineCloseCircle />;
    }
  };

  const hightlightAnswer = (e) => {
    if (e === data.singleQuizData.mcq[quizState.questionNo].answer) {
      return "#5A8336";
    } else if (e === quizState.userAnswer) {
      return "#8E2A2B";
    }
  };

  useEffect(() => {
    const timer =
      quizState.counter > 0 &&
      setInterval(() => {
        setQuizState((prev) => ({ ...prev, counter: prev.counter - 1 }));
      }, 1000);

    if (quizState.counter <= 0) {
      setQuizState((prev) => ({ ...prev, isAnswer: true }));
    }

    return () => {
      clearInterval(timer);
    };
  }, [quizState.counter]);

  return (
    <div className="single-quiz-card">
      <div className="card-head">
        <h2 className="card-title"> {data.singleQuizData.title}</h2>
        <div className="time-container">
          <h3 className="time-counter">{quizState.counter}</h3>
        </div>
      </div>
      <div className="card-body">
        <div style={{ height: "45px" }}>
          <h3 className="question">
            {quizState.questionNo + 1}.{" "}
            {data.singleQuizData.mcq[quizState.questionNo].question}
          </h3>
        </div>
        <ul className="options-container">
          {data.singleQuizData.mcq[quizState.questionNo].options.map((x) => (
            <li
              key={x}
              className="options"
              style={{
                background: quizState.isAnswer && hightlightAnswer(x),
              }}
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
            {quizState.questionNo + 1} of {data.singleQuizData.mcq.length}{" "}
            Questions
          </h4>
        </div>
        <div className="card-action-container">
          <button className="next-question-btn" onClick={() => navigate("/")}>
            Quit
          </button>
          <button className="next-question-btn" onClick={() => nextQuestFunc()}>
            {data.singleQuizData.mcq.length <= quizState.questionNo + 1 &&
            quizState.isAnswer
              ? "View Reult"
              : "Next Ques"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleQuizCard;

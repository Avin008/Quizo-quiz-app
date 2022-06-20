import { Link } from "react-router-dom";
import "./quiz-card.css";

const QuizCard = () => {
  return (
    <Link className="link" to="/quiz">
      <div className="card">
        <div className="card-head">
          <img
            src="https://img1.ak.crunchyroll.com/i/spire2/d3ec46d8ffbe792d56ff7a9131809cc61654845414_main.jpg"
            alt=""
            className="card-img"
          />
        </div>
        <div className="card-body">
          <h2>Death Note</h2>
          <h5>10 Questions</h5>
          <h5>Win 50 Coins </h5>
        </div>
      </div>
    </Link>
  );
};

export default QuizCard;

import { FcCurrencyExchange } from "react-icons/fc";
import { Link } from "react-router-dom";
import "./quiz-card.css";

const QuizCard = ({ data }) => {
  return (
    <Link className="link" to={`/quiz/${data.qid}`}>
      <div className="card">
        <div className="card-head">
          <img src={data.img} alt="" className="card-img" />
        </div>
        <div className="card-body">
          <h2 className="card-heading">{data.title}</h2>
          <h5 className="card-sub-heading">{data.questions} Questions</h5>
          <h5 className="card-sub-heading">
            Win {data.coins} Coins <FcCurrencyExchange />{" "}
          </h5>
        </div>
      </div>
    </Link>
  );
};

export default QuizCard;

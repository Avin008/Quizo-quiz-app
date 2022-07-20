import "./score-card.css";
import trophy from "../../assets/img/trophy.png";
import { FcCurrencyExchange } from "react-icons/fc";
import { useNavigate } from "react-router-dom";

const ScoreCard = ({ data }) => {
  const navigate = useNavigate();
  const refreshPage = () => {
    window.location.reload(false);
  };
  return (
    <div className="score-card-container">
      <div className="score-card">
        <h4 className="card-heading">Quiz Result</h4>
        <div className="img-container">
          <img className="img" src={trophy} alt="trophy" />
        </div>
        <h3 className="greetings">Congratulations</h3>
        <div className="score-container">
          <h5 className="your-score">Your Score</h5>
          <h3 className="user-score">{data.score} / 10</h3>
        </div>
        <div className="coin-container">
          <h5 className="coins">Earned Coins</h5>
          <h3 className="questions-attempted">
            <FcCurrencyExchange />
            {data.score}
          </h3>
        </div>
        <div className="card-actions">
          <button className="card-btn" onClick={() => refreshPage()}>
            Play Again
          </button>
          <button className="card-btn" onClick={() => navigate("/")}>
            Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default ScoreCard;

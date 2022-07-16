import "./score-card.css";
import trophy from "../../assets/img/trophy.png";
import { FcCurrencyExchange } from "react-icons/fc";
import { useNavigate } from "react-router-dom";

const ScoreCard = ({ data }) => {
  const navigate = useNavigate();
  return (
    <div className="score-card-container">
      <div className="score-card">
        <h4 className="card-heading">Quiz Result</h4>
        <div className="img-container">
          <img className="img" src={trophy} alt="trophy" />
        </div>
        <h3 style={{ color: "white" }}>Congratulations</h3>
        <div className="score-container">
          <h5 style={{ color: "white" }}>Your Score</h5>
          <h3 style={{ color: "white" }}>{data.score} / 10</h3>
        </div>
        <div className="coin-container">
          <h5 style={{ color: "white" }}>Earned Coins</h5>
          <h3 style={{ color: "white" }}>
            <FcCurrencyExchange />
            {(data.score / 10) * 100}
          </h3>
        </div>
        <div className="card-actions">
          <button className="card-btn" onClick={() => navigate("/")}>
            Play Again
          </button>
          <button className="card-btn">Home</button>
        </div>
      </div>
    </div>
  );
};

export default ScoreCard;

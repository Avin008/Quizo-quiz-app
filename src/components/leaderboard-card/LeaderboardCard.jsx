import { BsCoin } from "../../icons/icons";
import "./leaderboard-card.css";

const LeaderboardCard = ({ data }) => {
  return (
    <div className="leaderboard">
      <div className="leaderboard-head">
        <div className="your-score-card">
          <h4 className="score-heading">Your Score</h4>
          <div className="profile-img-container">
            <img
              src="https://static.vecteezy.com/system/resources/previews/002/275/847/original/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg"
              alt="user-profile-pic"
              className="your-profile-pic"
            />
          </div>
          <h5>{data.yourScore.user}</h5>
          <h6>Score : {data.yourScore.score}</h6>
          <h6 className="coins">
            <BsCoin /> {data.yourScore.coins} Coins
          </h6>
        </div>
      </div>
      <div className="leaderboard-body">
        <div className="leaderboard-heading">
          <h2>Leaderboard 🏆</h2>
        </div>
        <div className="leaderboard-col leaderboard-col-section">
          <h4>NAME</h4>
          <h4>SCORES</h4>
          <h4>COINS</h4>
        </div>
        <div className="leaderboard-col">
          {data.yourLeaderboard.map((x) => (
            <>
              <h5 className="user-name">{x.user}</h5>
              <h5>{x.score}</h5>
              <h5>
                <BsCoin /> {x.coins}
              </h5>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeaderboardCard;

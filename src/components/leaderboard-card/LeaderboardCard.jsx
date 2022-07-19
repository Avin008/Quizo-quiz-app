import { BsCoin } from "react-icons/bs";
import "./leaderboard-card.css";

const LeaderboardCard = ({ data }) => {
  return (
    <div className="leaderboard">
      <div className="leaderboard-head">
        <div className="your-score-card">
          <h3>Your Score</h3>
          <div className="profile-img-container">
            <img
              src="https://static.vecteezy.com/system/resources/previews/002/275/847/original/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg"
              alt=""
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
        <div className="leaderboard-col">
          <h4>NAME</h4>
          <h4>Scores</h4>
          <h4>COINS</h4>
        </div>
        <div className="leaderboard-col">
          {data.yourLeaderboard.map((x) => (
            <>
              <h6>{x.user}</h6>
              <h6>{x.score}</h6>
              <h6>
                <BsCoin /> {x.coins}
              </h6>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeaderboardCard;

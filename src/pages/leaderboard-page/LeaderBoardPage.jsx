import "./leaderboard-page.css";
import { BsCoin } from "react-icons/bs";

const LeaderBoardPage = () => {
  return (
    <div className="leaderboard-page">
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
            <h5>opplayer5</h5>
            <h5>Rank 1</h5>
            <h5
              style={{ display: "flex", alignItems: "center", gap: "0.2rem" }}
            >
              <BsCoin /> 300 Coins
            </h5>
          </div>
        </div>
        <div className="leaderboard-body">
          <div className="leaderboard-heading">
            <h2>Leaderboard 🏆</h2>
          </div>
          <div className="leaderboard-col">
            <h4>NAME</h4>
            <h4>RANK</h4>
            <h4>COINS</h4>
          </div>
          <div className="leaderboard-col">
            <h5>gamertank</h5>
            <h5>1</h5>
            <h5>300</h5>
          </div>
          <div className="leaderboard-col">
            <h5>gamertank</h5>
            <h5>1</h5>
            <h5>300</h5>
          </div>
          <div className="leaderboard-col">
            <h5>gamertank</h5>
            <h5>1</h5>
            <h5>300</h5>
          </div>
          <div className="leaderboard-col">
            <h5>gamertank</h5>
            <h5>1</h5>
            <h5>300</h5>
          </div>
          <div className="leaderboard-col">
            <h5>gamertank</h5>
            <h5>1</h5>
            <h5>300</h5>
          </div>
          <div className="leaderboard-col">
            <h5>gamertank</h5>
            <h5>1</h5>
            <h5>300</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeaderBoardPage;

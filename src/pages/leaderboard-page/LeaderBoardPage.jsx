import "./leaderboard-page.css";

const LeaderBoardPage = () => {
  return (
    <div className="leaderboard-page">
      <div className="leaderboard">
        <div className="leaderboard-head">
          <h2 className="leaderboard-heading">Leaderboard</h2>
          <span className="trophy">🏆</span>
        </div>
        <div className="leaderboard-card-body">
          <div className="leaderboard-card-heading">
            <h2>USERNAME</h2>
            <h2>RANK</h2>
            <h2>COINS</h2>
          </div>
        </div>
        <div className="your-score-card"></div>
      </div>
    </div>
  );
};

export default LeaderBoardPage;

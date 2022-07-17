import "./leaderboard-page.css";
import { BsCoin } from "react-icons/bs";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { collection, doc, getDoc, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";

const LeaderBoardPage = () => {
  const { auth } = useSelector((store) => store.auth);

  const [coins, setCoins] = useState(0);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const docRef = doc(db, "users", auth);
    getDoc(docRef).then((data) => {
      setCoins(data.data().coins);
      setScore(data.data().score);
    });
  }, [auth]);

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
            <h5>Score : {score}</h5>
            <h5
              style={{ display: "flex", alignItems: "center", gap: "0.2rem" }}
            >
              <BsCoin /> {coins} Coins
            </h5>
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

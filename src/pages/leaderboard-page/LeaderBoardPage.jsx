import "./leaderboard-page.css";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
import { getScore } from "../../redux-toolkit/features/scoreSlice";
import { LeaderboardCard } from "../../components";
import { GridLoader } from "react-spinners";
import { getLeaderboard } from "../../redux-toolkit/features/leaderboardSlice";

const LeaderBoardPage = () => {
  const { auth, score } = useSelector((store) => store);
  const { leaderboard } = useSelector((store) => store.leaderboard);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getScore(auth.token));
  }, [auth.token]);

  useEffect(() => {
    dispatch(getLeaderboard());
  }, []);

  return (
    <div className="leaderboard-page">
      <GridLoader loading={score.isLoading} color="white" />
      {!score.isLoading && (
        <LeaderboardCard
          data={{ yourScore: score, yourLeaderboard: leaderboard }}
        />
      )}
    </div>
  );
};

export default LeaderBoardPage;

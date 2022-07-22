import "./single-quiz-page.css";
import { RulesCard, ScoreCard, SingleQuizCard } from "../../components";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getSingleQuiz,
  resetLoading,
} from "../../redux-toolkit/features/singleQuizSlice";
import { GridLoader } from "react-spinners";
import { getScore } from "../../redux-toolkit/features/scoreSlice";

const SingleQuizPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { singleQuiz, isLoading } = useSelector((store) => store.singleQuiz);
  const { token } = useSelector((store) => store.auth);

  const [displayRulesCard, setDisplayCard] = useState(true);
  const [displayScore, setDisplayScore] = useState(false);
  const [score, setScore] = useState({ score: 0, coins: 0 });

  useEffect(() => {
    dispatch(getSingleQuiz(id));
    dispatch(getScore(token));

    return () => {
      dispatch(resetLoading());
    };
  }, []);

  return (
    <div className="single-quiz-page">
      <GridLoader color="white" loading={isLoading} />
      {!isLoading && !displayRulesCard && (
        <SingleQuizCard
          data={{
            singleQuizData: singleQuiz,
            toggleFunc: setDisplayScore,
            scoreFunc: setScore,
          }}
        />
      )}

      {displayRulesCard && !isLoading && (
        <RulesCard toggleFunc={setDisplayCard} />
      )}
      {displayScore && <ScoreCard data={score} />}
    </div>
  );
};

export default SingleQuizPage;

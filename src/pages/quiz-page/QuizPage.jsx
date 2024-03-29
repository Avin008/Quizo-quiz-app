import { QuizCard } from "../../components";
import "./quiz-page.css";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { GridLoader } from "react-spinners";
import { useEffect } from "react";
import {
  getQuizzes,
  resetLoading,
} from "../../redux-toolkit/features/quizzesSlice";
const QuizPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { isLoading, quizzes } = useSelector((store) => store.quizzes);

  useEffect(() => {
    dispatch(getQuizzes(id));

    return () => {
      dispatch(resetLoading());
    };
  }, []);

  return (
    <div className="quiz-page">
      {isLoading && (
        <div className="spinner">
          <GridLoader color="white" loading={isLoading} />
        </div>
      )}
      <div className="quiz-container">
        {!isLoading && quizzes.map((x) => <QuizCard data={x} key={x.qid} />)}
      </div>
    </div>
  );
};

export default QuizPage;

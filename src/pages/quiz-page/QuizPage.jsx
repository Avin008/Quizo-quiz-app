import { QuizCard } from "../../components";
import "./quiz-page.css";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { GridLoader } from "react-spinners";
import { useEffect } from "react";
import { getQuizzes } from "../../redux-toolkit/features/quizzesSlice";
const QuizPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { isLoading, quizzes } = useSelector((store) => store.quizzes);

  useEffect(() => {
    dispatch(getQuizzes(id));
  }, []);

  return (
    <div className="quiz-page">
      <GridLoader color="white" loading={isLoading} />
      {!isLoading && quizzes.map((x) => <QuizCard data={x} key={x.qid} />)}
    </div>
  );
};

export default QuizPage;

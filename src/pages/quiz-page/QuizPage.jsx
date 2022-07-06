import { QuizCard } from "../../components";
import "./quiz-page.css";
import { getQuizData } from "../../features/quizSlice/quizSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router";

const QuizPage = () => {
  const dispatch = useDispatch();
  const { quizes } = useSelector((store) => store.quiz);
  const { category } = useParams();

  const getQuiz = quizes.filter((x) => x.catergoryName === category);

  useEffect(() => {
    dispatch(getQuizData());
  }, []);

  return (
    <div className="quiz-page">
      {getQuiz.map((x) => (
        <QuizCard data={x} />
      ))}
    </div>
  );
};

export default QuizPage;

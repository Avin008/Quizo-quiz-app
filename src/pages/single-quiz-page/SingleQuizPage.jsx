import "./single-quiz-page.css";
import { RulesCard, SingleQuizCard } from "../../components";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getSingleQuiz } from "../../features/singleQuizSlice/singleQuizSlice";
import { data } from "../../data";

const SingleQuizPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { loading, singleQuiz } = useSelector((store) => store.singleQuiz);
  console.log(loading);

  useEffect(() => {
    dispatch(getSingleQuiz(id));
  }, []);

  return (
    <div className="single-quiz-page">
      {loading ? "loading" : <SingleQuizCard data={singleQuiz} />}
    </div>
  );
};

export default SingleQuizPage;

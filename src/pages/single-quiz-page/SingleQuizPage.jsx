import "./single-quiz-page.css";
import { RulesCard, SingleQuizCard } from "../../components";
import { useNavigate, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  getSingleQuiz,
  loadingFunc,
} from "../../features/singleQuizSlice/singleQuizSlice";

const SingleQuizPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { loading, singleQuiz } = useSelector((store) => store.singleQuiz);

  useEffect(() => {
    dispatch(getSingleQuiz(id));
    return () => {
      dispatch(loadingFunc());
    };
  }, []);

  return (
    <div className="single-quiz-page">
      {loading ? (
        <h3 style={{ color: "white" }}>loading</h3>
      ) : (
        <SingleQuizCard data={singleQuiz} />
      )}
    </div>
  );
};

export default SingleQuizPage;

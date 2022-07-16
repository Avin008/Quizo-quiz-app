import { QuizCard } from "../../components";
import "./quiz-page.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";

const QuizPage = () => {
  const { id } = useParams();

  const [quizData, setQuizData] = useState([]);

  const getQuizData = async (id) => {
    const collectionRef = collection(db, "quizzes");
    const q = query(collectionRef, where("id", "==", id));
    onSnapshot(q, (data) => {
      const res = data.docs.map((x) => x.data());
      setQuizData((prev) => [...prev, ...res]);
    });
  };

  useEffect(() => {
    getQuizData(id);
  }, []);

  return (
    <div className="quiz-page">
      {quizData.map((x) => (
        <QuizCard data={x} />
      ))}
    </div>
  );
};

export default QuizPage;

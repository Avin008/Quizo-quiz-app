import "./single-quiz-page.css";
import { RulesCard, ScoreCard, SingleQuizCard } from "../../components";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";

const SingleQuizPage = () => {
  const { id } = useParams();

  const [displayRulesCard, setDisplayCard] = useState(true);
  const [loading, setLoading] = useState(true);
  const [singleQuizData, setSingleQuizData] = useState([]);
  const [displayScore, setDisplayScore] = useState(false);
  const [score, setScore] = useState({ score: 0, coins: 0 });

  const getSingleQuizData = async (id) => {
    const collectionRef = collection(db, "quizzes");
    const q = query(collectionRef, where("qid", "==", id));
    onSnapshot(q, (data) => {
      const res = data.docs.map((x) => x.data());
      setSingleQuizData([...res][0]);
    });
  };

  useEffect(() => {
    getSingleQuizData(id);
    setLoading(false);
  }, []);

  return (
    <div className="single-quiz-page">
      {loading ? (
        <h3 style={{ color: "white" }}>loading</h3>
      ) : (
        !displayRulesCard && (
          <SingleQuizCard
            data={{
              singleQuizData: singleQuizData,
              toggleFunc: setDisplayScore,
              scoreFunc: setScore,
            }}
          />
        )
      )}
      {displayRulesCard && !loading && (
        <RulesCard toggleFunc={setDisplayCard} />
      )}
      {displayScore && <ScoreCard data={score} />}
    </div>
  );
};

export default SingleQuizPage;

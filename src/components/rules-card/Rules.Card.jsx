import "./rules-card.css";

const RulesCard = ({ toggleFunc }) => {
  return (
    <div className="rules-card-container">
      <div className="rules-card">
        <div className="card-head">
          <h2 className="card-heading">Rules</h2>
        </div>
        <div className="card-body">
          <ol className="card-items">
            <li className="card-item">
              1. This Quiz has 5 questions in total.
            </li>
            <li className="card-item">
              2. Player gets 15 seconds to answer each question.
            </li>
            <li className="card-item">
              3. 10 points is awarded for the correct answer.
            </li>
            <li className="card-item">
              4. No negative points for the wrong answer.
            </li>
            <li className="card-item">
              5. If the player gives no answer, the right answer will be
              highlighted after the timmer ends.
            </li>
          </ol>
        </div>
        <div className="card-footer">
          <button className="card-primary-btn" onClick={() => toggleFunc()}>
            Start Quiz
          </button>
        </div>
      </div>
    </div>
  );
};

export default RulesCard;

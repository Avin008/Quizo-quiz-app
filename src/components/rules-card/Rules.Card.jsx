import "./rules-card.css";

const RulesCard = ({ toggleFunc }) => {
  return (
    <div className="rules-card-container">
      <div className="rules-card">
        <div className="card-head">
          <h2 className="card-heading">Rules</h2>
        </div>
        <div className="card-body">
          <ul className="card-items">
            <li className="card-item">
              1. for each currect qnswer 10 poinst awarded{" "}
            </li>
            <li className="card-item">
              2. for each question 15 seconds counter
            </li>
            <li className="card-item">Lorem ipsum dolor sit amet. 3</li>
            <li className="card-item">Lorem ipsum dolor sit amet. 4</li>
          </ul>
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

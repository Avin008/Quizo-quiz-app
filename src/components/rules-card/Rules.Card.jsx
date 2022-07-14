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
            <li className="card-item">Lorem ipsum dolor sit amet. 1</li>
            <li className="card-item">Lorem ipsum dolor sit amet. 2</li>
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

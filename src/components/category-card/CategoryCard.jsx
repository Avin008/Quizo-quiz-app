import "./category-card.css";
import { Link } from "react-router-dom";
import { FcCurrencyExchange } from "../../icons/icons";

const CategoryCard = ({ data }) => {
  return (
    <Link className="link" to={`quizes/${data.id}`}>
      <div className="card">
        <div className="card-head">
          <img className="card-img" src={data.img} alt={data.categoryName} />
        </div>
        <div className="card-body">
          <h2 className="card-heading">{data.categoryName}</h2>
          <h5 className="card-sub-heading">30 Questions</h5>
          <h5 className="card-sub-heading">
            Win 300 Coins <FcCurrencyExchange className="card-icon" />
          </h5>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;

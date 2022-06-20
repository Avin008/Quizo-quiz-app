import "./category-card.css";
import { Link } from "react-router-dom";
import { FcCurrencyExchange } from "../../icons/icons";

type Props = {
  data: {
    id: string;
    categoryName: string;
    questionCount: number;
    img: string;
  };
};

const CategoryCard = ({ data }: Props) => {
  return (
    <Link className="link" to={`quizes/${data.id}`}>
      <div className="card">
        <div className="card-head">
          <img className="card-img" src={data.img} alt={data.categoryName} />
        </div>
        <div className="card-body">
          <h2>{data.categoryName}</h2>
          <h5>5 Shows</h5>
          <h5>
            Win 100 Coins <FcCurrencyExchange />
          </h5>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;

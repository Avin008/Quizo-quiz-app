import "./category-card.css";
import { FcCurrencyExchange } from "react-icons/fc";

const CategoryCard = () => {
  return (
    <div className="category-card">
      <div className="card-head">
        <img
          className="category-img"
          src="https://img.wallpapersafari.com/tablet/768/1024/53/30/WlcwaZ.jpg"
          alt=""
        />
      </div>
      <div className="card-body">
        <h2>Anime Quiz</h2>
        <h5>5 Shows</h5>
        <h5>
          Win 100 Coins <FcCurrencyExchange />
        </h5>
      </div>
    </div>
  );
};

export default CategoryCard;

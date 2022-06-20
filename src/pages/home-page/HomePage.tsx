import { CategoryCard } from "../../components";
import "./home-page.css";

import { data } from "../../data";

const HomePage = () => {
  return (
    <div className="homepage">
      {/* <h1 className="homepage-title">Categories</h1> */}
      <div className="category-container">
        {data.quiz.map((x) => (
          <CategoryCard data={x} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;

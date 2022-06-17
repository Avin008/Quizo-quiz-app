import { CategoryCard } from "../../components";
import "./home-page.css";

const HomePage = () => {
  return (
    <div className="homepage">
      {/* <h1 className="homepage-title">Categories</h1> */}
      <div className="category-container">
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
      </div>
    </div>
  );
};

export default HomePage;

import { CategoryCard } from "../../components";
import "./home-page.css";

import { useEffect } from "react";
import { getCategoryData } from "../../features/categorySlice/categorySlice";
import { useDispatch, useSelector } from "react-redux";

const HomePage = () => {
  const dispatch = useDispatch();
  const { category } = useSelector((store) => store.category);

  useEffect(() => {
    dispatch(getCategoryData());
  }, []);

  return (
    <div className="homepage">
      <div className="category-container">
        {category.map((x) => (
          <CategoryCard data={x} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;

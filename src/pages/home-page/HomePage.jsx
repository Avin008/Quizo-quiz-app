import { CategoryCard } from "../../components";
import "./home-page.css";
import { useDispatch, useSelector } from "react-redux";
import {
  getCategoryData,
  resetLoading,
} from "../../redux-toolkit/features/categorySlice";
import { useEffect } from "react";
import { GridLoader } from "react-spinners";

const HomePage = () => {
  const dispatch = useDispatch();
  const { category, isLoading } = useSelector((store) => store.category);

  useEffect(() => {
    dispatch(getCategoryData());

    return () => {
      dispatch(resetLoading());
    };
  }, []);

  return (
    <div className="homepage">
      <GridLoader color="white" loading={isLoading} />
      {!isLoading && (
        <div className="category-container">
          {category.map((x) => (
            <CategoryCard data={x} key={x.id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default HomePage;

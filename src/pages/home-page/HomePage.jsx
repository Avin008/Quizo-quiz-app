import { CategoryCard } from "../../components";
import "./home-page.css";
import { useEffect, useState } from "react";
import { auth, db } from "../../firebase/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";

import {
  collection,
  doc,
  getDoc,
  onSnapshot,
  QuerySnapshot,
} from "firebase/firestore";

const HomePage = () => {
  const [categoryData, setCategoryData] = useState([]);

  const getData = async () => {
    onSnapshot(collection(db, "category"), (data) => {
      const getData = data.docs.map((x) => x.data());
      setCategoryData([...getData]);
    });
  };

  useEffect(() => {
    getData();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user);
      } else {
        console.log(user);
      }
    });
  }, []);

  return (
    <div className="homepage">
      <div className="category-container">
        {categoryData.map((x) => (
          <CategoryCard data={x} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;

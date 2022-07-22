import "./not-found-page.css";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();
  return (
    <div className="not-found-page">
      <div className="not-found-container">
        <div className="not-found-emoji">😕</div>
        <h2 className="not-found-msg">Oops! Page Not Found</h2>
        <h4>The page you are looking for could not be found</h4>
        <button className="home-btn" onClick={() => navigate("/")}>
          GO TO HOMEPAGE
        </button>
      </div>
    </div>
  );
};

export default NotFoundPage;

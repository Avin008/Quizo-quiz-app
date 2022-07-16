import "./navbar.css";
import {
  FcViewDetails,
  BiUserCircle,
  MdOutlineLightMode,
  MdOutlineDarkMode,
} from "../../icons/icons";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className={`navbar`}>
      <div className="brand">
        <FcViewDetails className="brand-icon" />
        <h2 className="brand-name">Quizo</h2>
      </div>
      <ul className="nav-items">
        <Link to="/" className="nav-item">
          HOME
        </Link>
        <Link to="leaderboard" className="nav-item">
          LEADERBOARD
        </Link>
        <Link to="login" className="nav-item">
          <BiUserCircle className="nav-icons" /> SIGN IN
        </Link>
        <li className="nav-item">
          {/* {darkMode ? (
            <MdOutlineDarkMode className="nav-item nav-icons" />
          ) : ( */}
          <MdOutlineLightMode className="nav-item nav-icons" />
          {/* )} */}
        </li>
      </ul>
    </div>
  );
};

export default Navbar;

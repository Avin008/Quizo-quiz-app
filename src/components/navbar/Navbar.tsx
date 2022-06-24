import "./navbar.css";
import { useState } from "react";
import {
  FcViewDetails,
  BiUserCircle,
  MdOutlineLightMode,
  MdOutlineDarkMode,
} from "../../icons/icons";
import { Link } from "react-router-dom";

type ToggleTheme = {
  dark: boolean;
};

const Navbar = (): JSX.Element => {
  const [toggleTheme, setToggleTheme] = useState<ToggleTheme>({ dark: false });

  return (
    <div
      className={`navbar ${
        toggleTheme.dark ? "nav-dark-mode" : "nav-light-mode"
      }`}
    >
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
        <li
          className="nav-item"
          onClick={() =>
            setToggleTheme((theme) => ({ ...theme, dark: !theme.dark }))
          }
        >
          {toggleTheme.dark ? (
            <MdOutlineDarkMode className="nav-item nav-icons" />
          ) : (
            <MdOutlineLightMode className="nav-item nav-icons" />
          )}
        </li>
      </ul>
    </div>
  );
};

export default Navbar;

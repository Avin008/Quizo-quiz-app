import "./navbar.css";
import { useState } from "react";
import {
  FcViewDetails,
  BiUserCircle,
  MdOutlineLightMode,
  MdOutlineDarkMode,
} from "../../icons/icons";

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
        <FcViewDetails className="nav-brand-icon" />
        <h2 className="brand-name">Quizo</h2>
      </div>
      <ul className="nav-items">
        <li className="nav-item">HOME</li>
        <li className="nav-item">LEADERBOARD</li>
        <li className="nav-item">
          <BiUserCircle className="nav-icons" /> SIGN IN
        </li>
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

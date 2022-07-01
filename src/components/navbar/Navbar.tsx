import "./navbar.css";
import { useState } from "react";
import {
  FcViewDetails,
  BiUserCircle,
  MdOutlineLightMode,
  MdOutlineDarkMode,
} from "../../icons/icons";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../app/store";
import { toggleTheme } from "../../features/toggle-theme/toggle-theme-slice";
const Navbar = (): JSX.Element => {
  const { darkMode } = useSelector((store: RootState) => store.theme);
  const dispatch = useDispatch();

  return (
    <div className={`navbar ${darkMode ? "nav-dark-mode" : "nav-light-mode"}`}>
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
        <li className="nav-item" onClick={() => dispatch(toggleTheme())}>
          {darkMode ? (
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

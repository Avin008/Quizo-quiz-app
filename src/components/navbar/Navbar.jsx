import "./navbar.css";
import {
  FcViewDetails,
  BiUserCircle,
  MdOutlineLightMode,
  MdOutlineDarkMode,
} from "../../icons/icons";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { VscSignOut } from "react-icons/vsc";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/firebaseConfig";
import { removeAuth } from "../../redux-toolkit/features/authSlice";
import { toggleTheme } from "../../redux-toolkit/features/themeSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const { authStatus } = useSelector((store) => store.auth);
  const { darkMode } = useSelector((store) => store.themeSlice);

  const signoutUser = async () => {
    await signOut(auth)
      .then(() => {
        toast.success("user successfully logged Out");
        dispatch(removeAuth());
      })
      .catch((error) => {
        toast.error("signout failed");
      });
  };

  console.log(darkMode);

  return (
    <div className={`navbar`}>
      <div className="brand">
        <FcViewDetails className="brand-icon" />
        <h2 className="brand-name">Quizo</h2>
      </div>
      <ul className="nav-items">
        <NavLink to="/" className="nav-item">
          HOME
        </NavLink>
        <NavLink to="leaderboard" className="nav-item">
          LEADERBOARD
        </NavLink>
        {authStatus ? (
          <VscSignOut className="nav-icons" onClick={() => signoutUser()} />
        ) : (
          <NavLink to="login" className="nav-item">
            <BiUserCircle className="nav-icons" /> SIGN IN
          </NavLink>
        )}

        <li className="nav-item dark-mode-btn">
          {!darkMode ? (
            <MdOutlineDarkMode
              onClick={() => dispatch(toggleTheme())}
              className="nav-item nav-icons"
            />
          ) : (
            <MdOutlineLightMode
              onClick={() => dispatch(toggleTheme())}
              className="nav-item nav-icons"
            />
          )}
        </li>
      </ul>
    </div>
  );
};

export default Navbar;

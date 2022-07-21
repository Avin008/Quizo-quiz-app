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

const Navbar = () => {
  const dispatch = useDispatch();
  const { authStatus } = useSelector((store) => store.auth);

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

        {/* commented for later use */}

        {/* <li className="nav-item">
          {false ? (
            <MdOutlineDarkMode className="nav-item nav-icons" />
          ) : (
            <MdOutlineLightMode className="nav-item nav-icons" />
          )}
        </li> */}

        {/* commented for later use */}
      </ul>
    </div>
  );
};

export default Navbar;

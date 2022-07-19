import "./navbar.css";
import {
  FcViewDetails,
  BiUserCircle,
  MdOutlineLightMode,
  MdOutlineDarkMode,
} from "../../icons/icons";
import { Link, useNavigate } from "react-router-dom";
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
        <Link to="/" className="nav-item">
          HOME
        </Link>
        <Link to="leaderboard" className="nav-item">
          LEADERBOARD
        </Link>
        {authStatus ? (
          <VscSignOut className="nav-icons" onClick={() => signoutUser()} />
        ) : (
          <Link to="login" className="nav-item">
            <BiUserCircle className="nav-icons" /> SIGN IN
          </Link>
        )}
        <li className="nav-item">
          {false ? (
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

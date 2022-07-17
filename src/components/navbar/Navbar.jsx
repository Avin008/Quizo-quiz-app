import "./navbar.css";
import {
  FcViewDetails,
  BiUserCircle,
  MdOutlineLightMode,
  MdOutlineDarkMode,
} from "../../icons/icons";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { VscSignOut } from "react-icons/vsc";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/firebaseConfig";

const Navbar = () => {
  const { auth: authState } = useSelector((store) => store.auth);

  const signoutUser = async () => {
    await signOut(auth)
      .then(() => {
        toast.success("user successfully logged Out");
      })
      .catch((error) => {
        // An error happened.
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
        {authState == null ? (
          <Link to="login" className="nav-item">
            <BiUserCircle className="nav-icons" /> SIGN IN
          </Link>
        ) : (
          <VscSignOut className="nav-icons" onClick={() => signoutUser()} />
        )}
        <li className="nav-item">
          {/* {darkMode ? (
            <MdOutlineDarkMode className="nav-item nav-icons" />
          ) : ( */}
          <MdOutlineLightMode
            className="nav-item nav-icons"
            onClick={() => toast.success("hello world")}
          />
          {/* )} */}
        </li>
      </ul>
    </div>
  );
};

export default Navbar;

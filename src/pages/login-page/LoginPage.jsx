import { Link, Navigate, useNavigate } from "react-router-dom";
import "./login-page.css";
import { BsArrowRightCircle } from "react-icons/bs";
import { useState } from "react";
import { toast } from "react-toastify";
import { auth, db } from "../../firebase/firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";

const LoginPage = () => {
  const [loginInfo, setLoginInfo] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const signinUser = async (email, password) => {
    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        console.log(userCredential);
        toast.success("user successfully logged in");
        navigate("/");
      })
      .catch((error) => {
        toast.error(error.code);
      });
  };

  const loginUser = () => {
    if (loginInfo.email && loginInfo.password) {
      signinUser(loginInfo.email, loginInfo.password);
    }
  };

  const formFunc = (e) => {
    e.preventDefault();
    if (loginInfo.email && loginInfo.password) {
      loginUser();
    }
  };

  const guestLogin = () => {
    setLoginInfo({ email: "adram@gmail.com", password: "123456" });
    loginUser();
  };

  return (
    <div className="login-page">
      <div className="form-container">
        <form className="form" onSubmit={formFunc}>
          <h1 className="form-heading">Login</h1>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              className="input"
              type="text"
              placeholder="johndoe@gmail.com"
              value={loginInfo.email}
              onChange={(e) =>
                setLoginInfo((prev) => ({ ...prev, email: e.target.value }))
              }
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              className="input"
              type="password"
              placeholder="*********"
              value={loginInfo.password}
              onChange={(e) =>
                setLoginInfo((prev) => ({ ...prev, password: e.target.value }))
              }
            />
          </div>
          <div className="input-group checkbox">
            <label className="label" htmlFor="checkbox">
              {" "}
              <input type="checkbox" name="checkbox" id="checkbox" /> Remember
              Me
            </label>
          </div>
          <button className="login-btn" onClick={loginUser}>
            Login
          </button>
          <button className="login-btn" onClick={guestLogin}>
            Login As Guest
          </button>

          <Link className="link signup-btn" to="/signup">
            Create New Account
            <BsArrowRightCircle />
          </Link>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;

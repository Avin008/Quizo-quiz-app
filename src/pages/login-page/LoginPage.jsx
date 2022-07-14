import { Link, useNavigate } from "react-router-dom";
import "./login-page.css";
import { BsArrowRightCircle } from "react-icons/bs";
import { getUserLoggedIn } from "../../features/loginSlice/loginSlice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [loginInfo, setLoginInfo] = useState({ email: "", password: "" });

  const loginUser = () => {
    if (loginInfo.email && loginInfo.password) {
      dispatch(getUserLoggedIn(loginInfo))
        .unwrap()
        .then((data) => {
          navigate("/");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const formFunc = (e) => {
    e.preventDefault();
    loginUser();
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

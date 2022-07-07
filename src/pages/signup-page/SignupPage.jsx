import { Link, useNavigate } from "react-router-dom";
import { BsArrowRightCircle } from "react-icons/bs";
import "./signup-page.css";
import { getSignupUser } from "../../features/signupSlice/signupSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";
const SignupPage = () => {
  const dispatch = useDispatch();

  const [signupInfo, setSignupInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const signupUser = () => {
    dispatch(
      getSignupUser({
        firstName: "john",
        lastName: "doe",
        email: "johndoe@gmail.com",
        password: "1234567",
      })
    );
  };

  return (
    <div className="signup-page">
      <div className="form-container">
        <div className="form">
          <h1 className="form-heading">Sign Up</h1>
          <div className="input-group">
            <label htmlFor="email">First Name</label>
            <input
              className="input"
              type="text"
              placeholder="john"
              onChange={(e) =>
                setSignupInfo((prev) => ({
                  ...prev,
                  firstName: e.target.value,
                }))
              }
            />
          </div>
          <div className="input-group">
            <label htmlFor="lastname">Last Name</label>
            <input
              className="input"
              type="text"
              placeholder="Doe"
              onChange={(e) =>
                setSignupInfo((prev) => ({
                  ...prev,
                  lastName: e.target.value,
                }))
              }
            />
          </div>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              className="input"
              type="email"
              placeholder="johndoe@gmail.com"
              onChange={(e) =>
                setSignupInfo((prev) => ({
                  ...prev,
                  email: e.target.value,
                }))
              }
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              className="input"
              type="password"
              placeholder="*********"
              onChange={(e) =>
                setSignupInfo((prev) => ({
                  ...prev,
                  password: e.target.value,
                }))
              }
            />
          </div>
          <div className="input-group checkbox">
            <label className="label" htmlFor="checkbox">
              {" "}
              <input type="checkbox" name="checkbox" id="checkbox" /> I agree to
              all terms & conditions
            </label>
          </div>
          <button className="login-btn" onClick={signupUser}>
            Sign Up
          </button>
          <Link className="link signup-btn" to="/login">
            Already had a Account
            <BsArrowRightCircle />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;

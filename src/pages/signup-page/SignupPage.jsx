import { Link, useNavigate } from "react-router-dom";
import { BsArrowRightCircle } from "react-icons/bs";
import "./signup-page.css";
import { useState } from "react";
import { auth, db } from "../../firebase/firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";
import { doc, setDoc } from "firebase/firestore";
import { setAuth } from "../../redux-toolkit/features/authSlice";
import { useDispatch } from "react-redux";
import { ClipLoader } from "react-spinners";

const SignupPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loadingBtn, setLoadingBtn] = useState(false);
  const [signupInfo, setSignupInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const createDoc = async (user) => {
    const collRef = doc(db, "users", user.user.uid);
    setDoc(collRef, { coins: 55, score: 99, user: signupInfo.firstName });
  };

  const createUser = async (email, password) => {
    setLoadingBtn(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((user) => {
        navigate("/");
        toast.success("user created successfully");
        createDoc(user);
        dispatch(setAuth({ uid: user.user.uid }));
      })
      .catch((error) => {
        setLoadingBtn(false);
        toast.error(error.code);
        // ..
      });
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
          <button
            className="login-btn-primary"
            onClick={() => createUser(signupInfo.email, signupInfo.password)}
          >
            <ClipLoader color="black" size={15} loading={loadingBtn} />
            {!loadingBtn && "sign up"}
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

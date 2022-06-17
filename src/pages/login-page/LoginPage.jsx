import { Link } from "react-router-dom";
import "./login-page.css";
import { BsArrowRightCircle } from "react-icons/bs";

const LoginPage = () => {
  return (
    <div className="form-container">
      <form className="form">
        <h1 className="form-heading">Login</h1>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input
            className="input"
            type="text"
            placeholder="johndoe@gmail.com"
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input className="input" type="text" placeholder="*********" />
        </div>
        <div className="input-group checkbox">
          <label className="label" htmlFor="checkbox">
            {" "}
            <input type="checkbox" name="checkbox" id="checkbox" /> Remember Me
          </label>
        </div>
        <input className="login-btn" type="submit" value="Login" />
        <input className="login-btn" type="submit" value="Login as a Guest" />
        <Link className="link signup-btn" to="/signup">
          Create New Account
          <BsArrowRightCircle />
        </Link>
      </form>
    </div>
  );
};

export default LoginPage;

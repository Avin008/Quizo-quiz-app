import { Link } from "react-router-dom";
import { BsArrowRightCircle } from "react-icons/bs";

const SignupPage = () => {
  return (
    <div className="form-container">
      <form className="form">
        <h1 className="form-heading">Sign Up</h1>
        <div className="input-group">
          <label htmlFor="email">First Name</label>
          <input className="input" type="text" placeholder="john" />
        </div>
        <div className="input-group">
          <label htmlFor="lastname">Last Name</label>
          <input className="input" type="text" placeholder="Doe" />
        </div>
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
            <input type="checkbox" name="checkbox" id="checkbox" /> I agree to
            all terms & conditions
          </label>
        </div>
        <input className="login-btn" type="submit" value="Sign Up" />
        <Link className="link signup-btn" to="/login">
          Already had a Account
          <BsArrowRightCircle />
        </Link>
      </form>
    </div>
  );
};

export default SignupPage;

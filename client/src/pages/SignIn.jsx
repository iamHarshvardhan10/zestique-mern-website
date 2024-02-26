import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  signInStart,
  signInSuccess,
  signInFailure,
} from "../redux/user/userSlice";

const SignIn = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});
  const { loading, error } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(signInStart());
      const res = await fetch("/api/auth/signIn", {
        method: "Post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.error == false) {
        dispatch(signInFailure(data.error));
        return;
      }
      console.log(data);
      dispatch(signInSuccess(data));
      navigate("/");
    } catch (error) {
      dispatch(signInFailure(error.message));
    }
  };

  return (
    <div className="signInContainer">
      <div className="insideContainer">
        <div className="rigthSignInContainer">
          <span>Glad To see You On Board!</span>
          <span>
            We take pride in offering unparalleled customer support to ensure
            your experience with our Delicious Food.
          </span>
        </div>
        <div className="leftSignInContainer">
          <h3>Sign In To Your Account!</h3>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email"
              id="email"
              onChange={handleChange}
            />
            <input
              type="password"
              placeholder="Password"
              id="password"
              onChange={handleChange}
            />
            <button type="submit">{loading ? "loading" : "Sign In!"}</button>
          </form>
          <span>
            <Link to="/sign-up">New User?</Link> Create An Account Here!
          </span>
      {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}
        </div>
      </div>
    </div>
  );
};

export default SignIn;

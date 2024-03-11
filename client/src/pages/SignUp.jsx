import { useState } from "react";
import image01 from "../assets/food1.jpg";
import image02 from "../assets/food2.jpg";
import image03 from "../assets/food3.jpg";
import image04 from "../assets/food4.jpg";
import image05 from "../assets/food5.jpg";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const [formData, setFormData] = useState({});
  const images = [
    {
      id: 1,
      image: image01,
    },
    {
      id: 2,
      image: image02,
    },
    {
      id: 3,
      image: image03,
    },
    {
      id: 4,
      image: image04,
    },
    {
      id: 5,
      image: image05,
    },
  ];

  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/auth/signup", {
        method: "Post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      navigate("/sign-in");
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="singUpContainer">
        <span>Be the part of our delecious menu</span>
        <span>
          “Food for us comes from our relatives, whether they have wings or fins
          or roots. That is how we consider food. Food has a culture. It has a
          history. It has a story. It has relationships.”
        </span>
      <div className="insideContainer">
        <div className="rightSignUpContainer">
          <div className="imagesContainer">
            {images.map((item) => {
              return (
                <>
                  <img
                    src={item.image}
                    alt=""
                    // style={{ width: "175px", height: "155px" }}
                    className="imageContainer"
                  />
                </>
              );
            })}
          </div>
        </div>
        <div className="leftSignUPcontainer">
          <h3>
            Register Your Account!{" "}
          </h3>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Name"
              id="userName"
              onChange={handleChange}
            />
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
            <button type="submit">Sign up</button>
          </form>
          <span>
            Already Have an Account? <Link to="/sign-in">Sign In</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

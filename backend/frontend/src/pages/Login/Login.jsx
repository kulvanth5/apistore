import React from "react";
import logo from "./logo.png";
import user from "./user.png";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Loginstyle.css";

const Dashboard = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:5000/api/auth";
      const { data: res } = await axios.post(url, data);
      localStorage.setItem("token", res.data);
      navigate("/home");
      console.log(res.message);
      console.log(res.message);
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }
  };

  return (
    <>
      <div className="Navbar_logo">
        <img src={logo} />
      </div>
      <div className="welcome_card_container">
        <img src={user} className="user_icon" />
        <h2 className="welcome_message">Welcome to your Dashboard</h2>
        <p className="welcome_description">
          Your uploaded APIs will be displayed here once you login to your
          account
        </p>
      </div>
      <div className="login_card">
        <h5 className="login_description">Login to your account</h5>
        <input
          type="email"
          placeholder="Email address*"
          name="email"
          onChange={handleChange}
          value={data.email}
          required
          id="email"
        />
        <input
          type="password"
          placeholder="Password*"
          name="password"
          onChange={handleChange}
          value={data.password}
          id="password"
        />
        {error && <div className="Error_msg">{error}</div>}
        <button className="login_button" onClick={handleSubmit}>
          Login
        </button>
        <h3 className="New_user">
          Do not Have an account ?
          <Link to="/signup">
            <button
              type="button"
              className="Register_button"
              onClick={() => {}}
            >
              Sign-Up
            </button>
          </Link>
        </h3>
      </div>
    </>
  );
};

export default Dashboard;

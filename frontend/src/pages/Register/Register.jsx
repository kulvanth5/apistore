import React from "react";
import "./Register.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit =  async (e) => {
    e.preventDefault();
    try {
      console.log("hllo");
      const url = "https://apismarket.herokuapp.com/api/users";
      const { data: res } = await axios.post( url, data);
      navigate("/login");
      
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
    <div className="Registration_form">
      <div className="Form_container" >
        <h2 className="message">Create an Account </h2>
        <input
          type="name"
          placeholder="Name*"
          name="name"
          onChange={handleChange}
          value={data.name}
          required
          id="name_signup"
        />
        <input
          type="email"
          placeholder="Email*"
          name="email"
          onChange={handleChange}
          value={data.email}
          required
          id="email_signup"
        />
        <input
          type="password"
          placeholder="Password*"
          name="password"
          onChange={handleChange}
          value={data.password}
          required
          id="password_signup"
        />
        {error && <div className="Error_msg">{error}</div>}
        <button className="submit" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default Register;

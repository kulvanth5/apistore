import React from "react";
import logo from "./logo.png";
import "./LandingPageStyle.css";
import { useNavigate } from "react-router-dom";
import App_container from "../../components/App_container/App_container";
// import Homepage from "../../components/Homepage_component";
import Homecard from "../../components/HomepageCard/HomepageCard";
import BGimage from "./BGimage.png";
import whatfont from "./whatfont.png";
import http from "./http.png";
import focus from "./focus.png";

const MarketOut = () => {
  let navigate = useNavigate();

  return (
    <div className="Home_page">
      <div className="Navbar">
        <img src={logo} alt="logo-image" id="Logo" />
        <button
          className="Navbar_button"
          onClick={() => {
            navigate("/login");
          }}
        >
          Login/Signup
        </button>
      </div>

      <App_container id="first_component" />
      {/* <Homepage  id="second_component"/>
       */}
      <h5 className="Side_heading">All APIs</h5>

      <div className="API_container">
        <Homecard
          img={BGimage}
          name={"Background Remove"}
          description={
            "The description of the API in quick brief and we will truncate it here..."
          }
        />
        <Homecard
          img={whatfont}
          name={"Font Style"}
          description={
            "The description of the API in quick brief and we will truncate it here..."
          }
        />
        <Homecard
          img={http}
          name={"Https"}
          description={
            "The description of the API in quick brief and we will truncate it here..."
          }
        />
        <Homecard
          img={focus}
          name={"Website Blocker"}
          description={
            "The description of the API in quick brief and we will truncate it here..."
          }
        />
      </div>
    </div>
  );
};

export default MarketOut;

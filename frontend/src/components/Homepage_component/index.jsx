/* eslint-disable react/jsx-no-duplicate-props */
import React from "react";
import "./stylesheet.css";
import Homecard from "../HomepageCard/HomepageCard"
import BGimage from "./BGimage.png";
import whatfont from "./whatfont.png";
import http from "./http.png";
import focus from "./focus.png";
const Homepage = () => {


  return (
    <>
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
    </>
  );
};

export default Homepage;

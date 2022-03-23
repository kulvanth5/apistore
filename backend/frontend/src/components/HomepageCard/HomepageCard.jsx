import React from "react";
import "./HomepageCard.css";
import PropTypes from "prop-types";
//  import edit from "./edit.png";
const Homecard = (props) => {
    return (
        <>
            <div className="Homepage_Card">
                <img src={props.img} id="homecard_image" />
                <h5 className="homecard_Name">{props.name}</h5>
                <p className="card_Description">{props.description}</p>
            </div>
        </>
    );
}

Homecard.propTypes = {
  img: PropTypes.any,
    name: PropTypes.any,
    description: PropTypes.any,
};
export default Homecard;
/* eslint-disable react/prop-types */
import React from "react";
import "./APIcardstyle.css";
import PropTypes from "prop-types";
import edit from "./edit.png";
import trash from "./trash.png"
const APIcard = (props) => {
  // return (
  //   <>
  //     <div className="API_Image_Card">
  //       <img src={props.img} id="API_image" />
  //       <h5 className="API_Name">{props.name}</h5>
  //       <p className="API_Description">{props.description}</p>
  //     </div>
  //   </>
  // );

  return (
    <>
      <div className="API_Image_Card">
        <img src={props.img} id="API_image" />
        <h5 className="API_Name">{props.name}</h5>
        <p className="API_Description">{props.description}</p>
        <div className="buttons">
          <img
            src={edit}
            className="edit_button"
            alt="edit"
            style={{ marginLeft: "20px" }}
            onClick={() => {
              props.handleEdit(props.val), props.openModal();
              // console.log(props.val.id);
            }}
          />
          <img
            src={trash}
            className="delete_button"
            onClick={() => {
              props.handleDelete(props.val._id), props.refresh();
            }}
          />
        </div>
        {/* edit
        </button> */}
        {/* <button
          onClick={() => {
            console.log("entered");
          }}
        >
          delete
        </button> */}
      </div>
    </>
  );
};

APIcard.propTypes = {
  img: PropTypes.any,
  name: PropTypes.any,
};
export default APIcard;

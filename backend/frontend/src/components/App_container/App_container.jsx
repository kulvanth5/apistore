import React from "react";
import BGimage from "./BGimage.png";
import Rectangle from "./Rectangle.png";
import { useNavigate } from "react-router-dom";
import "./AppContainerStyle.css";

const App_container = () => {
  const navigate = useNavigate();

  return (
    <>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap"
        rel="stylesheet"
      />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Oswald:wght@200;300;400;500;600;700&display=swap"
        rel="stylesheet"
      />
      <div className="App_container">
        <img src={BGimage} alt="App-image" className="BGimage" />
        <img src={Rectangle} id="Rectangle" />
        <div className="Title" />
        <h2 className="App_Description">BACKGROUND IMAGE REMOVE</h2>
        <span className="TagLine">100% automatic and free</span>
        <button
          className="App_opener_button"
          onClick={() => {
            navigate("/app");
          }}
        >
          View App
        </button>
      </div>
    </>
  );
};

export default App_container;

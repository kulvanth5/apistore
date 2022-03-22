import React from "react";
import "./BGremove.css";
import logo from "./logo.png";
import BGimage from "./BGimage.png";
import image_icon from "./image.png";
import arrow from "./arrow.png";
import axios from "axios";
import { useState } from "react";
import download from "downloadjs";

const Bgremove = () => {

  const [image, setImage] = useState(null);
  const [data, setData] = useState(null);

  const handleChange = async (e) => {
    console.log("handleFileInput working!");
    let image = await blobToData(e.target.files[0]);

    setImage(image);
  };

  const blobToData = (blob) => {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result);
      reader.readAsDataURL(blob);
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = "/image-upload";
    const res = await axios.post(url,{
      image,
    });
    setData(res.data.image);
  };

  const download_img = () => {
    download(data, "no-bg.jpeg", "image");
  };

  return (
    <>
      <div>
        <div className="Navbar">
          <img src={logo} alt="logo_image" />
        </div>
        <div className="App_description_container">
          <h3 className="App_Title">Remove image background</h3>
          <p className="App_tagline">100% automatic and free</p>
          <img src={BGimage} id="App_image" alt="app-image" />
        </div>
        <form>
          <div className="image_upload_container">
            {data != null ? (
              <>
                <img src={data} alt="no-bg" id="bgrm_output" />
                <button className="download_button"   onClick={download_img}>
                  Download
                </button>
              </>
            ) : (
              <>
                <img src={image_icon} id="image" alt="symbol" />
                <p className="user_message">
                  File should be png, jpg,jpeg and less than 5mb
                </p>

                <div className="button_integrate">
                  <input
                    type="file"
                    className="file_uploader"
                    onChange={handleChange}
                  ></input>
                  <button className="image_upload" onClick={handleSubmit}>
                    Upload Image
                  </button>
                  <img src={arrow} id="arrow" />
                </div>
                <p className="suggestion">Or drop a file</p>
              </>
            )}
          </div>
        </form>
      </div>
    </>
  );
};

export default Bgremove;

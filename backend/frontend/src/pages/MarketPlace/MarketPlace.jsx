/* eslint-disable react/jsx-no-duplicate-props */
import React, { useEffect } from "react";
import "./MarketStyle.css";
import logo from "./logo.png";
import App_container from "../../components/App_container/App_container";
import Modal from "react-modal";
import { useState } from "react";
import axios from "axios";
import APIcard from "../../components/APIcard/APIcard";

// import edit from "./edit.png";
import api from "./api.png";
import { useNavigate } from "react-router-dom";

Modal.setAppElement("#root");

const MarketPlace = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [error, setError] = useState("");
  const [data, setData] = useState({
    name: "",
    endpoint: "",
    description: "",
  });

  const [apiList, setApiList] = useState([]);
  // const [editApi, setnewApi] = useState("");
  const [update, setUpdate] = useState({ isUpdate: false, id: "" });
  // var required = true;
  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const refresh = () => {
    window.location.reload();
  };

  const handleOut = () => {
    useNavigate("/");
  };

  const handleAdd = async (e) => {
    e.preventDefault();
    try {
      console.log("test..");
      const url = "http://localhost:5000/api/products/insert";
      const { res } = await axios.post(url, data);

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
    closeModal();
  };

  useEffect(() => {
    axios.get("http://localhost:5000/api/products/get").then((res) => {
      setApiList(res.data);
    });
  }, []);

  const handleEdit = (val) => {
    setUpdate({ isUpdate: true, id: val._id });
    setData({
      name: val.name,
      endpoint: val.endpoint,
      description: val.description,
    });
  };
  const handleUpdate = () => {
    console.log(update.id);
    axios.put("http://localhost:5000/api/products/update", {
      id: update.id,
      data: data,
    });
    setUpdate({ isUpdate: false, id: "" });
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:5000/api/products/delete/${id}`);
  };
  return (
    <>
      <div className="Navbar">
        <img src={logo} alt="logo-image" id="Logo" />
        <div className="Nav_buttons">
          <a className="user_APIs">My APIs</a>
          <button className="create_API" onClick={openModal}>
            + New API
          </button>
          <button className="logout" onClick={handleOut}>
            Logout
          </button>
        </div>
      </div>
      <Modal className="modal" isOpen={isOpen} onRequestClose={closeModal}>
        <div className="title">
          <span id="sub"> Add New API</span>
          <input
            type="text"
            placeholder="API Name"
            id="name"
            name="name"
            value={data.name}
            required
            onChange={handleChange}
          ></input>
          <input
            type="text"
            placeholder="API End Point"
            id="details"
            name="endpoint"
            value={data.endpoint}
            required
            onChange={handleChange}
          ></input>
          <input
            type="text"
            placeholder="Description of API"
            id="API_desc"
            name="description"
            value={data.description}
            required
            onChange={handleChange}
          ></input>
          <button
            className="new"
            onClick={(e) => {
              if (update.isUpdate) handleUpdate();
              else handleAdd(e);

              refresh();
            }}
          >
            {update.isUpdate ? " Update API" : "Add API"}
          </button>

          {error && <div className="Error_msg">{error}</div>}
        </div>
      </Modal>

      <div className="bgrm_app">
        <App_container />
      </div>
      {/* <p className="msg">User created APIs will be displayed here</p> */}
      {apiList.map((val, key) => {
        return (
          <div className="created_apis_container" key={key}>
            <APIcard
              img={api}
              name={val.name}
              description={val.description}
              val={val}
              openModal={openModal}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
              refresh={refresh}
            />
          </div>
        );
      })}
    </>
  );
};

export default MarketPlace;

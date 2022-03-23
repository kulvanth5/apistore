import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/Home/LandingPage";
import Register from "./pages/Register/Register";
import HomePage from "./pages/MarketPlace/MarketPlace";
import Login from "./pages/Login/Login";
import BGremove from "./pages/BG_Remover/BGremove";
// import API_creator from "./components/AddAPI/NewAPI";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/app" element={<BGremove />} />
          {/* <Route path="/new" element={<API_creator/>}/> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

import React from "react";
import Pagination from "./components/Pagination";
import VideoList from "./components/VideoList";
import "./App.css";
import Logo from "./UT_logo.png";

const App = () => {
  return (
    <div>
      <h1 className="heading">
        <img src={Logo} alt="logo" className="logo" /> YouTube Clone Posts
      </h1>

      <Pagination />
      <VideoList />
    </div>
  );
};

export default App;

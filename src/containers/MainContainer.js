import React from "react";
import Navbar from "../components/Navbar";
import HeaderContainer from "./HeaderContainer";

const MainContainer = () => {
  console.log("in Main page");
  return (
    <div>
      <HeaderContainer />
      <Navbar />
    </div>
  );
};

export default MainContainer;

import React from "react";
import HeaderContainer from "./HeaderContainer";
import Navbar from "../components/Navbar";
import SlideImg from "../components/footer/SlideImg";

const MainContainer = () => {
  console.log("in Main page");
  return (
    <div>
      <HeaderContainer />
      <Navbar />
      <SlideImg />
    </div>
  );
};

export default MainContainer;
//<Navbar />일단은 삭제 예정

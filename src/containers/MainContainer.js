import React from "react";
import HeaderContainer from "./HeaderContainer";
import Navbar from "../components/Navbar";
import SlideImg from "../components/footer/SlideImg";
import Stars from "../components/Stars";
import CheckboxLabel from "../components/main/CheckBoxLabel";

import "./MainContainer.css";

const MainContainer = () => {
  console.log("in Main page");
  return (
    <div className="main">
      {/* <Stars stars={4.5}></Stars> 디테일한 소수점까지는 반영되지 않는다.*/}
      <header className="main-header">
        <HeaderContainer />
      </header>
      <div className="main-section">
        <section className="main-navbar">
          <Navbar />
        </section>
        {/* <CheckboxLabel /> */}
        <div className="main-slide-container">
          <section className="main-slideimg">
            <SlideImg autoflow={2000} />
          </section>
        </div>
      </div>
    </div>
  );
};

export default MainContainer;

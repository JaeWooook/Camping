import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <nav className="gnb-menu">
        <a href="/">Home</a>
        <a href="/SignIn">로그인</a>
        <a href="/SignUp">회원가입</a>
      </nav>
    </div>
  );
};

export default Navbar;

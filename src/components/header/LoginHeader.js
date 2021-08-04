import React from "react";
import { Link } from "react-router-dom";
import "./LoginHeader.css";

const LoginHeader = () => {
  return (
    <Link to="/" className="loginHeader-logo">
      Algo Camping
    </Link>
  );
};

export default LoginHeader;

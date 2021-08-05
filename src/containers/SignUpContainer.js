import React from "react";
import SignUp from "../components/SignUp";
import LoginHeader from "../components/header/LoginHeader";

const SignUpContainer = () => {
  console.log("in signup container");
  return (
    <div>
      <div>
        <LoginHeader></LoginHeader>
      </div>
      <SignUp />
    </div>
  );
};

export default SignUpContainer;

import React from "react";
import SignIn from "../components/SignIn";
import LoginHeader from "../components/header/LoginHeader";

const SignInContainer = () => {
  console.log("in signin container");
  return (
    <div>
      <div>
        <LoginHeader></LoginHeader>
      </div>
      <SignIn />
    </div>
  );
};

export default SignInContainer;

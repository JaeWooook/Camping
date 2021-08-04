import React from "react";
import { Link } from "react-router-dom";
import "./SignIn.css";

const SignIn = () => {
  console.log("in signin");
  return (
    <div className="positioner">
      <div className="shadowed-box">
        <div className="logo-wrapper">
          <div className="logo">Login</div>
        </div>
        <div className="contents">
          <hr></hr>
          <div>
            <button>카카오 아이디로 로그인</button>
          </div>
          <br></br>
          <div>
            <button>네이버 아이디로 로그인</button>
          </div>
          <br></br>
          <hr></hr>
          <label>이메일</label>
          <div>
            <input type="email" placeholder="email@example.com"></input>
          </div>
          <br></br>
          <label>패스워드</label>
          <div>
            <input type="password" placeholder="Password"></input>
          </div>
          <br></br>
          <div>
            <button>OK</button>
          </div>
          <br></br>
          <Link to="/SignUp" className="go-signup">
            아직 알고캠핑의 회원이 아니신가요?
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;

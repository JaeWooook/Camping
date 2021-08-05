import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./SignIn.css";

const SignIn = () => {
  console.log("in signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const setEmailHandler = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };
  const setPasswordHandler = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    //서버로 보냄
  };
  useEffect(() => {
    console.log("email, pw", email, password);
  }, [email, password]);

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
          <form onSubmit={handleSubmit}>
            <label>이메일</label>
            <div>
              <input
                type="email"
                placeholder="email@example.com"
                required
                onChange={setEmailHandler}
              ></input>
            </div>
            <br></br>
            <label>패스워드</label>
            <div>
              <input
                type="password"
                placeholder="Password"
                required
                onChange={setPasswordHandler}
              ></input>
            </div>
            <br></br>
            <div>
              <button>OK</button>
            </div>
          </form>
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

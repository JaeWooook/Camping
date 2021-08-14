import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
// import kakao_login_btn from "../store/img/kakao_login_btn.png";
// import naver_login_btn from "../store/img/naver_login_btn.png";
import "./SignIn.css";

// import KaKaoLogin from "react-kakao-login";

//kakao api
// const { Kakao } = window;

const SignIn = ({ history }) => {
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
    console.log(process.env.REACT_APP_SIGNIN);
    console.log(process.env.development.REACT_APP_SIGNIN);
    try {
      fetch(process.env.REACT_APP_SIGNIN, {
        method: "POST",
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      })
        .then((response) => response.json())
        .then((result) => {
          if (result.TOKEN) {
            localStorage.setItem("TOKEN", result.TOKEN);
            history.push("/");
          } else {
            alert("로그인 실패!");
          }
        });
    } catch (error) {
      console.log(error);
    }
    //서버로 보냄
  };

  const handleKakaoLoggin = () => {
    // window.Kakao.init(process.env.REACT_APP_KAKAO_JAVASCRIPT_APP_KEY);
    console.log(window.Kakao);
    window.Kakao.Auth.login({
      success: (authObj) => {
        console.log(authObj);
        axios(process.env.REACT_APP_KAKAO_REDIRECT_URL, {
          method: "POST",
          headers: {
            Authorization: authObj.access_token,
          },
        })
          .then((res) => res.json())
          .then((res) => {
            if (res.token) {
              localStorage.setItem("CC_Token", res.token);
              console.log("로그인 되었습니다.");
              history.push("/");
            } else {
              console.log("다시 확인해 주세요.");
            }
          });
      },
      fail: function (err) {
        console.log("에러", err);
      },
    });
  };

  const handleNaverLoggin = () => {};
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
            <button className="kakao-login-btn" onClick={handleKakaoLoggin}>
              카카오 ID로 간편 로그인
            </button>
          </div>
          <br></br>
          <div>
            <button className="naver-login-btn" onClick={handleNaverLoggin}>
              네이버 ID로 간편 로그인
            </button>
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

import React, { useEffect, useState } from "react";
import "./SignUp.css";

const SignUp = () => {
  console.log("in signup");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const setEmailHandler = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };
  const setPasswordHandler = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
  };

  const setNameHandler = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //서버로 보냄
  };

  useEffect(() => {
    console.log("email, pw, name", email, password, name);
  }, [email, password, name]);
  return (
    <div className="positioner-signup">
      <div className="shadowed-box-signup">
        <div className="logo-wrapper-signup">
          <div className="signup">Join</div>
        </div>
        <div className="signup-contents">
          <hr></hr>
          <br></br>
          <form onSubmit={handleSubmit}>
            <label>이메일</label>
            <div>
              <input
                type="email"
                placeholder="email@example.com"
                required
                onChange={setEmailHandler}
              ></input>
              <button>확인</button>
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
            <label>이름</label>
            <div>
              <input
                type="text"
                placeholder="Name"
                required
                onChange={setNameHandler}
              ></input>
            </div>
            <br></br>
            <div>
              <button>OK</button>
            </div>
          </form>
          <br></br>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

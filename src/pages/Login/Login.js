import React from "react";
import "./Login.scss";
import { Link, useNavigate } from 'react-router-dom'; 
const Login = () => {
  const navigate = useNavigate();
  // const GoSignUp = () => {
  //   navigate("/signUp");
  //   }
  

  return (
    <div className="login">
      <div className ="container">
        <div className="logoDiv">
          <div>
            <div>
              <img className = "logo" src = "/images/Logo.png"></img>
            </div>
            <img className = "logoWecode" src = "/images/logo_wecode.png"></img>
          </div>
        </div>
        <div className = "splash">
          <div className = "inputDiv">
            <input type="text" placeholder="이메일"></input>
            <input type="password" placeholder="비밀번호"></input>
          </div>
          <button> 로그인 </button>
          <div className = "loginMenu">
            <Link to = "/signUp" className = "borderR">회원 가입</Link>
            <a href="" >비밀번호 찾기</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;



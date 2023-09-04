import React, { useState } from "react";
import "./Login.scss";
import { Link, useNavigate } from 'react-router-dom'; 
const Login = () => {
  const navigate = useNavigate();
  // const GoSignUp = () => {
  //   navigate("/signUp");
  //   }
  
  const [id , setId] = useState('');
  const [password , setPassword] = useState('');

  const idChange = () =>{
    setId(document.getElementById("email").value)
  }
  const passwordChange = () =>{
    setPassword(document.getElementById("password").value)
  }
  

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
            <input type="text" placeholder="이메일" id = "email"onChange ={idChange}></input>
            <input type="password" placeholder="비밀번호" id="password"onChange = {passwordChange}></input>
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



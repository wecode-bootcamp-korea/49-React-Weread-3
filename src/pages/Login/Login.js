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
  const [color , setColor] = useState('#add8e6');
  const [disalbe , setDisalbe] = useState(true);

  const idChange = () =>{
    setId(document.getElementById("email").value)
    
    id.includes('@') && password.length >= 5 ? setColor('#2D71F7') : setColor('#add8e6');
    
    id.includes('@') && password.length >= 5 ? setDisalbe(false) : setDisalbe(true);
  }
  const passwordChange = () =>{
    setPassword(document.getElementById("password").value);

    id.includes('@') && password.length >= 5 ? setColor('#2D71F7') : setColor('#add8e6');
    id.includes('@') && password.length >= 5 ? setDisalbe(false) : setDisalbe(true);
    
  }

  const logIn = () =>{
    console.log("g2g2")
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
          <button onClick = {logIn} id = "loginBtn" style = {{backgroundColor : color}} disabled={disalbe}> 로그인 </button>
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



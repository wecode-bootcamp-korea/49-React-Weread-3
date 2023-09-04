import React, {useState} from "react";
import "./Login.scss";
// import MainLogo from "/images/Weread/Logo.png";
// import WordLogo from "/images/Weread/logo_wecode.png";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const navigateSignin = () => {navigate('/signin')};
  const navigateMain =() => {navigate('/')}

  const MainLogo = process.env.PUBLIC_URL + '/images/Weread/Logo.png';
  const WordLogo = process.env.PUBLIC_URL + '/images/Weread/logo_wecode.png';
  
  const [userId, setUserId] = useState();
  const [userPassword, setUserPassword] = useState();
  const saveUserId = (event) => {setUserId(event.target.value)}
  const saveUserPassword = (event) => {setUserPassword(event.target.value)}

  return (
    <div className="Login">
      <div className="loginBack">
        <div className="loginSection">
          <div className="logoBox">
            <img className="mainLogo" src={MainLogo} alt="MainLogo"/>
            <img className="wordLogo" src={WordLogo} alt="WordLogo"/>
          </div>
          <div className="loginInf">
            <input placeholder="이메일"  type="email" className="loginInfBox id" onChange={saveUserId}></input>
            <input placeholder="비밀번호" type="password" className="loginInfBox password"  onChange={saveUserPassword}></input>
            <button onClick={navigateMain} className="loginInfBox loginBtn">로그인</button>
          </div>
          <div className="more">
            <div className="sign" ><button onClick={navigateSignin}>회원 가입</button></div>
            <div className="findPassword" ><button href="1">비밀번호 찾기</button></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
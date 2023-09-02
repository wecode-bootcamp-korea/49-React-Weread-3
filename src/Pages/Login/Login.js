import React from "react";
import "./Login.scss";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="login_container">
      <div className="login_main">
        <div className="login_main_head">
          <div className="main_head_image">
            <img
              src={process.env.PUBLIC_URL + `/Images/Logo.png`}
              alt="wecodeImage"
            ></img>
          </div>
          <div className="main_head_text">
            <img
              src={process.env.PUBLIC_URL + `/Images/logo_wecode.png`}
              alt="wecodeImage"
            ></img>
          </div>
        </div>

        <div className="login_main_body">
          <div className="login_input_box">
            <input
              className="login_input_text_box"
              type="text"
              placeholder="이메일"
            ></input>
          </div>

          <div className="login_input_box">
            <input
              className="login_input_text_box"
              type="password"
              placeholder="비밀번호"
            ></input>
          </div>

          <div className="login_input_box">
            <button className="login_button">로그인</button>
          </div>

          <div className="login_bottom_button">
            <button
              onClick={() => navigate("/main")}
              className="login_user_sign_button"
            >
              회원가입
            </button>
            <hr className="line"></hr>
            <button className="login_user_sign_button">비밀번호 찾기</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

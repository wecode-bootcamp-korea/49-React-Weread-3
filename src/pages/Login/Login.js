import React, { useState } from "react";
import "./Login.scss";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
    const [id, setId] = useState("");
    const [pw, setPw] = useState("");
    //ID/PW값
    const saveUserId = (event) => {
        setId(event.target.value);
    };
    const saveUserPw = (event) => {
        setPw(event.target.value);
    };

    const isButtonEnabled = id.includes("@") && pw.length >= 5;

    //경로
    const navigate = useNavigate();

    const goJoin = () => {
        navigate("/Join");
    };
    const goMain = () => {
        navigate("/Main");
    };

    return (
        <div className="login">
            <div className="inner-box">
                <div className="logo-wrapper">
                    <h1 className="logo-symbol">
                        <img src="images/Logo.png" alt="wecode" className="logo-img" />
                    </h1>
                    <h2 className="logo-wecode">
                        <img src="images/logo_wecode.png" alt="wecode" className="logo-text" />
                    </h2>
                </div>
                <form className="login-form">
                    <div className="input-wrapper">
                        <input
                            type="text"
                            name="e-mail"
                            placeholder="이메일"
                            onChange={saveUserId}
                        />
                        <input
                            type="text"
                            name="password"
                            placeholder="비밀번호"
                            onChange={saveUserPw}
                        />
                        <button className="btn-login" onClick={goMain} disabled={!isButtonEnabled}>
                            로그인
                        </button>
                        <Link to="/main">메인페이지로</Link>
                    </div>
                    <div className="form-bottom">
                        <button className="btn-join" onClick={goJoin}>
                            회원가입
                        </button>
                        <button className="btn-password">비밀번호</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;

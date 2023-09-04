import React from "react";
import "./Signin.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";



const Signin = () => {
  const navigate = useNavigate();
  const navigateLogin = () => {navigate('/login')}

  return (
    <div className="Signin">
      <div className="loginBack">
        <div className="loginSection">
          <button onClick={navigateLogin} className="backBtn"><FontAwesomeIcon icon={faChevronLeft}/>&nbsp;&nbsp;뒤로</button>
            <h1>회원가입</h1>
            <div className="basicInfBox">
              <div className="inf">
                <div className="basicInf">기본 정보</div>
                <div className="choice necessary">필수 사항</div>
              </div>
                <input placeholder="이메일"  type="email" className="loginInfBox id"></input>
                <input placeholder="비밀번호" type="password" className="loginInfBox password"></input>
                <input placeholder="비밀번호 확인" type="password" className="loginInfBox password passwordcheckAgian"></input>
              </div>
            <div className="nicknameBox">
              <div className="inf">
                <div className="basicInf">닉네임과 프로필 이미지</div>
                <div className="choice">선택 사항</div>
              </div>
              <input placeholder="닉네임"  type="text" className="loginInfBox"></input>
            </div>
            <div className="phoneBox">
              <div className="inf">
                <div className="basicInf">전화번호</div>
                <div className="choice">선택 사항</div>
              </div>
                <div className="phoneBoxBox">
                  <select className="loginInfBox phoneNumberFirst " >
                    <option value="010">010</option>
                    <option value="011">011</option>
                    <option value="119">???</option>
                  </select>
                  <input placeholder="휴대폰 번호를 입력해주세요."  type="number" className="loginInfBox phoneNumebrSecond"></input>
                </div>
            </div>
            <div className="birthdayBox">
              <div className="inf">
                <div className="basicInf">생일</div>
                <div className="choice">선택 사항</div>
              </div>
              <div className="birthdayBoxBox">
                <select className="loginInfBox birthdayYear" >
                    <option value="1997년">1997년</option>
                    <option value="011">011</option>
                    <option value="119">???</option>
                </select>
                <select className="loginInfBox birthdayMonth" >
                    <option value="1월">1월</option>
                    <option value="011">011</option>
                    <option value="119">???</option>
                </select>
                <select className="loginInfBox birthdayDay" >
                    <option value="1일">1일</option>
                    <option value="011">011</option>
                    <option value="119">???</option>
                </select>
              </div>
            </div>
            <button type="button" className="loginInfBox signinBox">회원 가입</button>
          </div>

        </div>
      </div>
  );
};
export default Signin;
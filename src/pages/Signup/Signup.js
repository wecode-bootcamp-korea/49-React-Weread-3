import React from "react";
import "./Signup.scss";
import { useNavigate } from 'react-router-dom'; 

const SignUp = () => {
    const navigate = useNavigate();
    const GoBack = () => {
      navigate("/");
    };
  return (
    <div className="signUp">
       <div className ="container">
            <div className="header">
                <div className="goBack">
                    <button onClick={GoBack}> &lt; </button>
                    <span>뒤로</span>
                </div>
            </div>
            <div className="signUpForm">
                <div className="pageTitle">
                    <h1>회원가입</h1>
                </div>
                <div className="basicInfo">
                    <label>
                        <span className= "cBlack f16">기본 정보</span>
                        <span className = "cRed f12">필수 사항</span>
                    </label>
                    <div className="inputList">
                        <input type="text" placeholder="이메일"></input>
                        <input type="password" placeholder="비밀번호"></input>
                        <input type="password" placeholder="비밀번호 확인"></input>
                    </div>
                </div>
                <div className="basicInfo">
                    <label>
                        <span className= "cBlack f16">닉네임과 프로필 이미지</span>
                        <span className = "cBlack f12">선택 사항</span>
                    </label>
                    <div className="inputList">
                        <input type="text" placeholder="닉네임"></input>
                    </div>
                </div>
                <div className="basicInfo">
                    <label>
                        <span className= "cBlack f16">전화번호</span>
                        <span className = "cBlack f12">선택 사항</span>
                    </label>
                    <div className="inputList">
                        <div className="phone">
                            <select>
                                <option>010</option>
                                <option>011</option>
                            </select>
                            <input type="number" placeholder="휴대폰 번호를 입력해주세요."></input>
                        </div>
                    </div>
                </div>
                <div className="basicInfo">
                    <label>
                        <span className= "cBlack f16">생일</span>
                        <span className = "cBlack f12">선택 사항</span>
                    </label>
                    <div className="inputList">
                        <div className="birth">
                            <select>
                                <option>1998년</option>
                                <option>1999년</option>
                                <option>2000년</option>
                                <option>2000년</option>
                                <option>2001년</option>
                                <option>2002년</option>
                                <option>2003년</option>
                                <option>2004년</option>
                                <option>2005년</option>
                                <option>2006년</option>
                            </select>
                            <select>
                                <option>1월</option>
                                <option>2월</option>
                                <option>3월</option>
                                <option>4월</option>
                                <option>5월</option>
                                <option>6월</option>
                                <option>7월</option>
                                <option>8월</option>
                                <option>9월</option>
                                <option>10월</option>
                                <option>11월</option>
                                <option>12월</option>
                            </select>
                            <select>
                                <option>1일</option>
                            </select>
                        </div>
                    </div>
                </div>

            </div>
            <div className="buttonDiv">
                <button> 회원가입 </button>            
            </div>
      </div> 
    </div>
  );
};

export default SignUp;



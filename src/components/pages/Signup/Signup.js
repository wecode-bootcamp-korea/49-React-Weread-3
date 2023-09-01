import React from "react";
import "./Join.scss";
import { useNavigate } from "react-router-dom";

const Join = () => {
    const navigate = useNavigate();

    const goLogin = () => {
        navigate("/Login");
    };

    return (
        <div className="Join">
            <div className="inner-box">
                <div className="btn-back-wrapper">
                    <button onClick={goLogin} className="btn-back">
                        <img src="images/icon-back.png" alt="뒤로가기 아이콘" />
                        뒤로
                    </button>
                </div>
                <form className="join-form">
                    <h2>회원가입</h2>
                    <div className="input-wrapper mt-24">
                        <label>
                            <span>기본 정보</span>
                            <span className="color-red note">필수 사항</span>
                        </label>
                        <input type="text" name="e-mail" placeholder="이메일" />
                        <input type="text" name="password" placeholder="비밀번호" />
                        <input type="text" name="confirm-password" placeholder="비밀번호 확인" />
                    </div>
                    <div className="input-wrapper mt-24">
                        <label>
                            <span>닉네임과 프로필 이미지</span>
                            <span className="note">선택 사항</span>
                        </label>
                        <input type="text" name="nickname-profile" placeholder="닉네임" />
                    </div>
                    <div className="input-wrapper input-phonenumber mt-24">
                        <label>
                            <span>전화번호</span>
                            <span className="note">선택 사항</span>
                        </label>
                        <div className="input-inner">
                            <select className="phone-number" id="phone-number">
                                <option value="010">010</option>
                                <option value="019">019</option>
                                <option value="016">016</option>
                                <option value="011">011</option>
                            </select>
                            <input
                                id="phone"
                                type="text"
                                name="phone-number"
                                placeholder="휴대폰 번호를 입력해주세요."
                            />
                        </div>
                    </div>
                    <div className="input-wrapper mt-24">
                        <label id="">
                            <span>생일</span>
                            <span className="note">선택 사항</span>
                        </label>
                        <div className="input-inner">
                            <select id="year" className="year">
                                <option value="2000">2000년</option>
                                <option value="1999">1999년</option>
                                <option value="1998">1998년</option>
                                <option value="1997">1997년</option>
                            </select>
                            <select id="month" className="month">
                                <option value="1">1월</option>
                                <option value="2">2월</option>
                                <option value="3">3월</option>
                                <option value="4">4월</option>
                                <option value="5">5월</option>
                                <option value="6">6월</option>
                                <option value="7">7월</option>
                                <option value="8">8월</option>
                                <option value="9">9월</option>
                                <option value="10">10월</option>
                                <option value="11">11월</option>
                                <option value="12">12월</option>
                            </select>
                            <select id="day" className="day">
                                <option value="30">30일</option>
                                <option value="20">20일</option>
                                <option value="10">10일</option>
                                <option value="6">1일</option>
                            </select>
                        </div>
                    </div>
                    <button className="btn-join-b">회원가입</button>
                </form>
            </div>
        </div>
    );
};

export default Join;

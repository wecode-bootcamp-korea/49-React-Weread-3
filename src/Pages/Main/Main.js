import React from "react";
import "./Main.scss";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate();

  return (
    <div className="main_container">
      <div className="user_join_main">
        <div className="main_header">
          <button className="move_button">
            <span className="button_text" onClick={() => navigate("/")}>
              {" "}
              〈 뒤로{" "}
            </span>
          </button>
        </div>

        <div className="main_body">
          <div className="main_body_name">
            <span className="user">회원가입</span>
          </div>

          <div className="user_information">
            <div className="guide_text_constainer">
              <span className="guide_text1">기본 정보</span>
              <span className="guide_text2">필수 입력</span>
            </div>

            <div className="input_box">
              <input
                className="input_text_box"
                type="text"
                placeholder="이메일"
              ></input>
            </div>
            <div className="input_box">
              <input
                className="input_text_box"
                type="password"
                placeholder="비밀번호"
              ></input>
            </div>
            <div className="input_box">
              <input
                className="input_text_box"
                type="password"
                placeholder="비밀번호 확인"
              ></input>
            </div>
          </div>

          <div className="user_nickname_and_image">
            <div className="guide_text_constainer">
              <span className="guide_text1">닉네임과 프로필 이미지</span>
              <span className="guide_text3">선택 사항</span>
            </div>
            <div className="input_box">
              <input
                className="input_text_box"
                type="text"
                placeholder="닉네임"
              ></input>
            </div>
          </div>

          <div className="phone_number">
            <div className="guide_text_constainer">
              <span className="guide_text1">전화번호</span>
              <span className="guide_text3">선택 사항</span>
            </div>
            <div className="number_container">
              <select className="input_forword_number_box" placeholder="010">
                <option value={""}>010</option>
                <option value={""}>011</option>
                <option value={""}>016</option>
                <option value={""}>019</option>
              </select>
              <input
                className="input_back_number_box"
                type=""
                placeholder="휴대폰 번호를 입력해주세요. "
              ></input>
            </div>
          </div>

          <div className="user_birthday">
            <div className="guide_text_constainer">
              <span className="guide_text1">생일</span>
              <span className="guide_text3">선택 사항</span>
            </div>
            <div className="number_container">
              <select className="input_year_box" placeholder="">
                <option value={""}>1991</option>
                <option value={""}>1992</option>
                <option value={""}>1993</option>
                <option value={""}>1994</option>
                <option value={""}>1995</option>
                <option value={""}>1996</option>
                <option value={""}>1997</option>
                <option value={""}>1998</option>
                <option value={""}>1999</option>
                <option value={""}>2000</option>
                <option value={""}>2001</option>
                <option value={""}>2002</option>
                <option value={""}>2003</option>
                <option value={""}>2004</option>
                <option value={""}>2005</option>
                <option value={""}>2006</option>
                <option value={""}>2007</option>
                <option value={""}>2008</option>
                <option value={""}>2009</option>
                <option value={""}>2010</option>
                <option value={""}>2011</option>
                <option value={""}>2012</option>
                <option value={""}>2013</option>
                <option value={""}>2014</option>
              </select>

              <select className="input_birth_box1" placeholder="">
                <option value={""}>1 월</option>
                <option value={""}>2 월</option>
                <option value={""}>3 월</option>
                <option value={""}>4 월</option>
                <option value={""}>5 월</option>
                <option value={""}>6 월</option>
                <option value={""}>7 월</option>
                <option value={""}>8 월</option>
                <option value={""}>9 월</option>
                <option value={""}>10월</option>
                <option value={""}>11월</option>
                <option value={""}>12월</option>
              </select>

              <select className="input_birth_box2" placeholder="">
                <option value={""}>1일</option>
                <option value={""}>2일</option>
                <option value={""}>3일</option>
                <option value={""}>4일</option>
                <option value={""}>5일</option>
                <option value={""}>6일</option>
                <option value={""}>7일</option>
                <option value={""}>8일</option>
                <option value={""}>9일</option>
                <option value={""}>10일</option>
              </select>
            </div>
          </div>
        </div>

        <div className="main_bottom">
          <button className="user_create_button">회원 가입</button>
        </div>
      </div>
    </div>
  );
};

export default Main;

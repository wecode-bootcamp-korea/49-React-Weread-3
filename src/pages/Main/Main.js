import React from "react";
import './Main.scss';
import { useNavigate } from 'react-router-dom';

const Main = () => {

  const navigate = useNavigate();

  const navigateLogin = () => {
    navigate('/login')
  }

  return (
    <div className="Main">
      <div className="buttonBox">
        <button onClick={navigateLogin}>로그인 하러 가기</button>
      </div>
    </div>
  );
};
export default Main;
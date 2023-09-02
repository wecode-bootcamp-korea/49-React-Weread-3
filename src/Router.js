import React from "react";
import Signin from "./pages/Signin/Signin";
import Login from "./pages/Login/Login";
import Main from "./pages/Main/Main";
import { Routes, Route, BrowserRouter } from "react-router-dom";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </BrowserRouter> 
  );
};

export default Router;
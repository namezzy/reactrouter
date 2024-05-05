import React, { PureComponent } from "react";
import { Link, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import "./style.css";
import Login from "./pages/Login";
import NotFoundPage from "./pages/NotFundPage";

export class App extends PureComponent {
  render() {
    return (
      <div className="app">
        <div className="header">
          <span>Header</span>
          <div className="nav">
            {/* <NavLink
              to="/home"
              style={({ isActive }) => ({ color: isActive ? "pink" : "" })}
            >
              首页
            </NavLink>
            <NavLink
              to="/about"
              style={(isActive) => ({ color: isActive ? "gray" : "" })}
            >
              关于
            </NavLink> */}
            {/* 
            <NavLink
              to="/home"
              className={({ isActive }) => (isActive ? "home-link-active" : "")}
            >
              首页
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "about-link-active" : ""
              }
            >
              关于
            </NavLink> */}

            <Link to="/home">首页</Link>
            <Link to="/about">关于</Link>
            <Link to="/login">登录界面</Link>
          </div>
          <hr />
        </div>
        <div className="content">
          {/* 映射关系：path => Component */}
          <Routes>
            <Route path="/" element={<Navigate to="/home"/>}/>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<NotFoundPage/>}/>
          </Routes>
        </div>
        <div className="footer">
          Footer
          <hr />
        </div>
      </div>
    );
  }
}

export default App;

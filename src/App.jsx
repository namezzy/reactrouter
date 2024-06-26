import React from "react";
import { Link, useNavigate, useRoutes } from "react-router-dom";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Login from "./pages/Login";
// import NotFoundPage from "./pages/NotFundPage";
// import HomeRanking from "./pages/HomeRanking";
// import HomeRecommend from "./pages/HomeRecommend";
// import Category from "./pages/Category";
// import Order from "./pages/Order";
// import HomeSongMenu from "./pages/HomeSongMenu";
// import Detail from "./pages/Detail";
// import User from "./pages/User";
import routes from "./router";
import "./style.css";

export function App(props) {
  const navigate = useNavigate();

  function navigateTo(path) {
    navigate(path);
  }
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

          <button onClick={e => navigateTo("/category")}>分类</button>
          <span onClick={e => navigateTo("/order")}>订单</span>
        </div>
        <hr />
      </div>
      <div className="content">
        {/* 映射关系：path => Component */}
        {/* <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />}>
            <Route path="/home" element={<Navigate to="/home/recommend" />} />
            <Route path="/home/recommend" element={<HomeRecommend />} />
            <Route path="/home/ranking" element={<HomeRanking />} />
            <Route path="/home/songmenu" element={<HomeSongMenu />} />
          </Route>
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/category" element={<Category />} />
          <Route path="/order" element={<Order />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/user" element={<User />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes> */}
        {useRoutes(routes)}
      </div>
      <div className="footer">
        Footer
        <hr />
      </div>
    </div>
  );
}

export default App;

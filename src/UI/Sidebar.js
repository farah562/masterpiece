import React, { useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Sidebar.css";

import { AuthContext } from "../context/auth-context";
import { useAuth } from "../hooks/auth-hook";

const ADMIN_ROUTES = (
  <ul className="menu-links">
    <li className="nav-link">
      <Link to="/home">
        <i className="bx bx-home-alt icon"></i>
        <span className="text nav-text">Dashboard</span>
      </Link>
    </li>

    <li className="nav-link">
      <a href="#">
        <i className="bx bx-plus-circle icon"></i>
        <span className="text nav-text">Add User</span>
      </a>
    </li>

    <li className="nav-link">
      <a href="#">
        <i className="bx bx-list-ul icon"></i>
        <span className="text nav-text">Deleted Accounts</span>
      </a>
    </li>

    <li className="nav-link">
      <Link to="/profile">
        <i className="bx bx-user-circle icon"></i>
        <span className="text nav-text">Profile</span>
      </Link>
    </li>
  </ul>
);

export default function Sidebar() {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();
  const { user } = useAuth();

  console.log(user);

  useEffect(() => {
    const body = document?.querySelector("body");
    let modeSwitch = body.querySelector(".toggle-switch");
    let modeText = body.querySelector(".mode-text");

    modeSwitch.addEventListener("click", () => {
      body.classList.toggle("dark");

      if (body.classList.contains("dark")) {
        modeText.innerText = "Light mode";
      } else {
        modeText.innerText = "Dark mode";
      }
    });
  }, []);

  const logout = () => {
    auth.logout();
    navigate("/");
  };

  const toggleSidebar = () => {
    const body = document?.querySelector("body");
    let sidebar = body?.querySelector(".sidebar");

    sidebar.classList.toggle("close");
  };

  return (
    <nav className="sidebar close">
      <header>
        <div className="image-text">
          <span className="image">
            {user?.role !== "user" && (
              <lottie-player
                src="https://assets6.lottiefiles.com/packages/lf20_a91d7Z.json"
                background="transparent"
                speed="1"
                style={{ width: "100px", height: "100px" }}
                autoplay
              ></lottie-player>
            )}
          </span>

          <div className="text logo-text">
            <span className="name">Good Food</span>
            <span className="profession">Saving food App</span>
          </div>
        </div>

        <i className="bx bx-chevron-right toggle" onClick={toggleSidebar}></i>
      </header>

      <div className="menu-bar">
        <div className="menu">
          <li className="search-box">
            <i className="bx bx-search icon"></i>
            <input type="text" placeholder="Search..." />
          </li>
          {user?.role == "user" && ADMIN_ROUTES}
          {/* <ul className="menu-links">
            <li className="nav-link">
              <Link to="/home">
                <i className="bx bx-home-alt icon"></i>
                <span className="text nav-text">Dashboard</span>
              </Link>
            </li>

            <li className="nav-link">
              <a href="#">
                <i className="bx bx-bar-chart-alt-2 icon"></i>
                <span className="text nav-text">Revenue</span>
              </a>
            </li>

            <li className="nav-link">
              <a href="#">
                <i className="bx bx-bell icon"></i>
                <span className="text nav-text">Notifications</span>
              </a>
            </li>

            <li className="nav-link">
              <Link to="/analytics">
                <i className="bx bx-pie-chart-alt icon"></i>
                <span className="text nav-text">Analytics</span>
              </Link>
            </li>

            <li className="nav-link">
              <a href="#">
                <i className="bx bx-heart icon"></i>
                <span className="text nav-text">Likes</span>
              </a>
            </li>

            <li className="nav-link">
              <Link to="/profile">
                <i className="bx bx-user-circle icon"></i>
                <span className="text nav-text">Profile</span>
              </Link>
            </li>
          </ul> */}
        </div>

        <div className="bottom-content">
          <li className="" onClick={logout}>
            <i className="bx bx-log-out icon"></i>
            <span className="text nav-text">Logout</span>
          </li>

          <li className="mode">
            <div className="sun-moon">
              <i className="bx bx-moon icon moon"></i>
              <i className="bx bx-sun icon sun"></i>
            </div>
            <span className="mode-text text">Dark mode</span>

            <div className="toggle-switch">
              <span className="switch"></span>
            </div>
          </li>
        </div>
      </div>
    </nav>
  );
}

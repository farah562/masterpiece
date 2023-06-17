import React from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";

import { useAuth } from "../../hooks/auth-hook";

export default function Navbar() {

  const { token, login, logout, userId, user } = useAuth();

  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Good Food, Good Mood
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Link
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled">Disabled</a>
            </li>
          </ul>
          {!user && <form className="d-flex" role="search">
          <Link to={`/auth`} className="btn btn-primary me-2" >
              Sign Up
            </Link>
            <Link to={`/admin-auth`} className="btn btn-outline-primary">
              Login as admin
            </Link>
          </form>}
          {user && <>
            <img width="28" height="28" src="https://img.icons8.com/parakeet/28/user.png" alt="user"/>
            <h6 className="ms-2 ps-2 mb-0 fw-bold border-start">Welcome, {user?.username}</h6>
          </>}
        </div>
      </div>
    </nav>
  );
}

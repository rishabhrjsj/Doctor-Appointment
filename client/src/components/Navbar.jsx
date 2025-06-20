import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../styles/navbar.css";
import { HashLink } from "react-router-hash-link";
import { useDispatch } from "react-redux";
import { setUserInfo } from "../redux/reducers/rootSlice";
import { FiMenu } from "react-icons/fi";
import { RxCross1 } from "react-icons/rx";
import jwt_decode from "jwt-decode";






const Navbar = () => {
  const [iconActive, setIconActive] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [user, setUser] = useState(
    localStorage.getItem("token")
      ? jwt_decode(localStorage.getItem("token"))
      : ""
  );

  const logoutFunc = () => {
    dispatch(setUserInfo({}));
    localStorage.removeItem("token");
    window.location.href = "http://localhost:5173"; // Redirect to home page on the specified port
  };
  

  // Navbar.jsx
// const logoutFunc = async () => {
//   try {
//     await fetch("http://localhost:5000/logout", {
//       method: "POST",
      
//     });

//     // Clear frontend state
//     dispatch(setUserInfo({}));
//     localStorage.removeItem("token");

//     // Redirect
//     window.location.href = "http://localhost:5173"; 
//   } catch (error) {
//     console.error("Logout failed:", error);
//     alert("Logout failed");
//   }
// };


  return (
    <header>
     
      <nav className={iconActive ? "nav-active" : ""}>
      <h2 className="nav-logo">
  <span className="icon-title">
    <span className="icon">S</span>
    <NavLink to="/" className="title">SwasthAI</NavLink>
  </span>
</h2>

        <ul className="nav-links">
        <li>
  <a href="http://localhost:5173/" target="_blank" rel="noopener noreferrer">
    Home
  </a>
</li>

          
          <li>
            <NavLink to={"/doctors"}>Doctors</NavLink>
          </li>
          {token && user.isAdmin && (
            <li>
              <NavLink to={"/dashboard/users"}>Dashboard</NavLink>
            </li>
          )}
          {token && !user.isAdmin && (
            <>
              <li>
                <NavLink to={"/appointments"}>Appointments</NavLink>
              </li>
              <li>
                <NavLink to={"/bookroom"}>Video Call</NavLink>
              </li>
              <li>
                <NavLink to={"/notifications"}>Notifications</NavLink>
              </li>
              <li>
                <NavLink to={"/applyfordoctor"}>Apply for doctor</NavLink>
              </li>
              {/* <li>
                <HashLink to={"/#contact"}>Contact Us</HashLink>
              </li> */}
              <li>
                <NavLink to={"/profile"}>Profile</NavLink>
              </li>
            </>
          )}
          {!token ? (
            <>
              <li>
                <NavLink
                  className="btn"
                  to={"/login"}
                >
                  Login
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="btn"
                  to={"/register"}
                >
                  Register
                </NavLink>
              </li>
            </>
          ) : (
            <li>
              <span
                className="btn"
                onClick={logoutFunc}
              >
                Logout
              </span>
            </li>
          )}
        </ul>
      </nav>
      <div className="menu-icons">
        {!iconActive && (
          <FiMenu
            className="menu-open"
            onClick={() => {
              setIconActive(true);
            }}
          />
        )}
        {iconActive && (
          <RxCross1
            className="menu-close"
            onClick={() => {
              setIconActive(false);
            }}
          />
        )}
      </div>
    </header>
  );
};

export default Navbar;

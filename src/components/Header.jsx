import React from "react";
import { Link } from "react-router-dom";
import "../styles/header.css";
import { useAtomValue } from "jotai";
import { Role } from "../App";
import { useNavigate } from "react-router-dom";
import NBReceptionist from "./NBReceptionist";
// icons
import logo from "../assets/logo-removebg.png";
import settings_ico from "../assets/asied/settings.svg";
import logout_ico from "../assets/asied/logout.svg";
// icons
function Header() {
  const role = useAtomValue(Role);
  const goTo = useNavigate();
  const logout = () => {
    goTo("/");
  };
  return (
    <>
      <aside className="aside-bar">
        <img src={logo} alt="logo" id="logo" className="logo" />
        <nav className="nav-bar">
          {role == "réceptionniste" ? <NBReceptionist /> : <></>}
        </nav>
        <div className="settings">
          <div className="setting_item">
            <Link to="setting">
              <img src={settings_ico} alt="settings_ico" className="nav-icon" />
            </Link>
            <Link to="setting" className="nav-text">
              Settings
            </Link>
          </div>
          <div className="setting_item">
            <Link to="/">
              <img src={logout_ico} alt="logout_ico" className="nav-icon" />
            </Link>
            <Link to="/" className="nav-text">
              Logout
            </Link>
          </div>
        </div>
      </aside>
    </>
  );
}

export default Header;

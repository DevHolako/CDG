import React from "react";
import { Link } from "react-router-dom";
import "../styles/header.css";
import { useAtom } from "jotai";
import { roleAtom } from "../App";
import { useNavigate } from "react-router-dom";
import NavBar_Receptionist from "./navbar_receptionist";
// icons
import logo from "../assets/logo-removebg.png";
import sales_ico from "../assets/asied/sales.svg";
import settings_ico from "../assets/asied/settings.svg";
import logout_ico from "../assets/asied/logout.svg";
// icons
function Header() {
  const [role] = useAtom(roleAtom);
  const goTo = useNavigate();
  const logout = () => {
    goTo("/");
  };
  return (
    <>
      <aside className="aside-bar">
        <img src={logo} alt="logo" id="logo" className="logo" />
        <nav className="nav-bar">
          {role == "rece" ? <NavBar_Receptionist /> : <></>}
        </nav>
        <div className="settings">
          <div className="setting_item">
            <Link to="settings">
              <img src={settings_ico} alt="settings_ico" className="nav-icon" />
            </Link>
            <Link to="settings" className="nav-text">
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

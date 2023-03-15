import React from "react";
import { Link } from "react-router-dom";
import "../styles/siedbar.css";
import { useAtom } from "jotai";
import { roleAtom } from "../App";
import { useNavigate } from "react-router-dom";
import NavBar_Receptionist from "./NavBar_Receptionist";
// icons
import logo from "../assets/logo-removebg.png";
import sales_ico from "../assets/asied/sales.svg";
import settings_ico from "../assets/asied/settings.svg";
import logout_ico from "../assets/asied/logout.svg";
// icons
function SiedBar() {
  const [role] = useAtom(roleAtom);
  const goTo = useNavigate();
  const logout = () => {
    goTo("/");
  };
  return (
    <aside className="aside-bar">
      <div className="asied_logo">
        <img src={logo} alt="logo" id="logo" className="logo " />
      </div>
      <nav className="sied_nav">
        {role == "rece" ? (
          <NavBar_Receptionist />
        ) : (
          <>
            <div className="nav_item">
              {/* <img src={dash_ico} alt="dash_ico" /> */}
              <span>Dashbord</span>
            </div>
            <div className="nav_item">
              <img src={users_ico} alt="users_ico" />
              <span>Users</span>
            </div>
            <div className="nav_item">
              <img src={sales_ico} alt="sales_ico" />
              <span>Sales</span>
            </div>
          </>
        )}
      </nav>

      <div className="settings">
        <div className="settings_item">
          <Link to="settings" className="button link-btn">
            <img src={settings_ico} alt="settings_ico" />
          </Link>
          <Link to="settings" className="button link-btn link-text">
            Settings
          </Link>
        </div>
        <div className="settings_item">
          <button className="button link-btn " onClick={logout}>
            <img src={logout_ico} alt="logout_ico" />
          </button>
          <Link to="/" className="button link-btn link-text">
            Logout
          </Link>
        </div>
      </div>
    </aside>
  );
}

export default SiedBar;

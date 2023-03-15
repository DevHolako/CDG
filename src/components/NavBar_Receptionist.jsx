import React from "react";
import { Link } from "react-router-dom";
import dash_ico from "../assets/asied/dashbord.svg";
import users_ico from "../assets/asied/users.svg";
function NavBar_Receptionist() {
  return (
    <>
      <div className="nav_item">
        <Link to="dashbord" className="button link-btn">
          <img src={dash_ico} alt="dash_ico" />
        </Link>
        <Link to="dashbord" className="button link-btn link-text">
          Dashbord
        </Link>
      </div>
      <div className="nav_item">
        <Link to="patients" className="button link-btn">
          <img src={users_ico} alt="users_ico" />
        </Link>
        <Link to="patients" className="button link-btn link-text">
          Patients
        </Link>
      </div>
    </>
  );
}

export default NavBar_Receptionist;

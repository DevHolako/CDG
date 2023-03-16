import React from "react";
import { Link } from "react-router-dom";
import dash_ico from "../assets/asied/dashbord.svg";
import users_ico from "../assets/asied/users.svg";
function NavBar_Receptionist() {
  return (
    <>
      <div className="nav_item">
        <Link to="/réceptionniste">
          <img src={dash_ico} alt="dash_ico" className="nav-icon" />
        </Link>

        <Link to="/réceptionniste" className="nav-text">
          Dashbord
        </Link>
      </div>
      <div className="nav_item">
        <Link to="patients">
          <img src={users_ico} alt="users_ico" className="nav-icon" />
        </Link>
        <Link to="patients" className="nav-text">
          Patients
        </Link>
      </div>
    </>
  );
}

export default NavBar_Receptionist;

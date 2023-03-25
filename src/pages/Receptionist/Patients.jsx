import React from "react";
import data from "../../Data/data.json";
import { columnes } from "../../Data/Columns";
import "./styles/patients.css";
import CustomTable from "../../components/CustomTable";
function Patients() {
  return (
    <div className="pt-contanier bg">
      <h1 className="title is-2 is-center">List Patients</h1>
      <div className="arrows">
        <div className="scroll-left-arrow"></div>
        <div className="scroll-rghit-arrow"></div>
      </div>
      <CustomTable inc_data={data} inc_cols={columnes} isPatient={true} />
    </div>
  );
}

export default Patients;

import React from "react";
import data from "../../Data/data.json";
import { columnes } from "../../Data/Columns";
import "./styles/patients.css";
import CustomTable from "../../components/CustomTable";
function Patients() {
  return (
    <>
      <div className="patients-container dashbord-item">
        <h1 className="title">List Patients</h1>
        <CustomTable inc_data={data} inc_cols={columnes} isPatient={true} />
      </div>
    </>
  );
}

export default Patients;

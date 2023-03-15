import React from "react";
import BaiscTable from "../../components/BaiscTable";
import data from "../../Data/data.json";
import { columnes } from "../../Data/Columns";
import "./styles/patients.css";
function Patients() {
  return (
    <>
      <div className="container dashbord-item">
        <h1 className="title">List Patients</h1>
        <BaiscTable Operation={true} inc_data={data} inc_cols={columnes} />
      </div>
    </>
  );
}

export default Patients;

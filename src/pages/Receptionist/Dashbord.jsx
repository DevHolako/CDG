import React from "react";
import PatientCard from "../../components/PatientCard";
import data from "../../Data/dock-data.json";
import { columnes } from "../../Data/Recette";
import CustomTable from "../../components/CustomTable";
import "./styles/dashbord.css";

//------------------------------------------//

function Dashbord() {
  return (
    <div className="dashbord-container">
      <PatientCard method={"ajouter"} />
      <div className="bg section2">
        <h2 className="title is-3">RECETTE MEDECIN</h2>
        <CustomTable inc_data={data} inc_cols={columnes} isMedecin={true} />
      </div>
    </div>
  );
}

export default Dashbord;

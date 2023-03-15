import React from "react";
import PatientCard from "../../components/PatientCard";
import "./styles/dashbord.css";
import data from "../../Data/dock-data.json";
import { columnes } from "../../Data/Recette";
import CustomTable from "../../components/CustomTable";

//------------------------------------------//

function Dashbord() {
  return (
    <div className="dashbord-container">
      <section className="dashbord-item section1">
        <PatientCard method={"Ajouter"} />
      </section>
      <section className="dashbord-item section2">
        <div className="medecin_container container">
          <h2 className="title is-4 rece-title">RECETTE MEDECIN</h2>
          <CustomTable inc_data={data} inc_cols={columnes} isMedecin={true} />
        </div>
      </section>
    </div>
  );
}

export default Dashbord;

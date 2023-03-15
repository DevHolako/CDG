import React from "react";
import PatientCard from "../../components/PatientCard";
import "./styles/dashbord.css";
import data from "../../Data/dock-data.json";
import { columnes } from "../../Data/Recette";
import RecetteMedecin from "../../components/RecetteMedecin";

//------------------------------------------//

function Dashbord() {
  return (
    <div className="dashbord-container">
      <section className="dashbord-item dashbord-section1">
        <PatientCard method={"Ajouter"} />
      </section>
      <section className="dashbord-item  dashbord-section2 ">
        <h2 className="title is-4 rece-title">RECETTE MEDECIN</h2>
        <div className="medecin_container">
          <RecetteMedecin inc_data={data} inc_cols={columnes} />
        </div>
      </section>
    </div>
  );
}

export default Dashbord;

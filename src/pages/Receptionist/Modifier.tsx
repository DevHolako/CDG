import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import PatientCard from "../../components/PatientCard";
import data from "../../Data/data.json";

type Patient = {
  id: number;
  nom: string;
  prenom: string;
  acte: string;
  montant: number;
  method: string;
};

export const GetPatient = ({ params }): Patient => {
  const target = data.find((obj) => params.id == obj.id);
  if (target) {
    return target;
  } else {
    return {
      id: 0,
      nom: "",
      prenom: "",
      acte: "",
      method: "",
      montant: 0,
    };
  }
};
function Modifier() {
  const patient = useLoaderData() as Patient;
  return (
    <div className="edit-containre">
      <section className="dashbord-item  ">
        <PatientCard method={"Modifier"} targetPatient={patient} />
      </section>
    </div>
  );
}

export default Modifier;

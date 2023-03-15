import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PatientCard from "../../components/PatientCard";
import data from "../../Data/data.json";
import "./styles/editacte.css";
function Edit_Acte() {
  const { id } = useParams();
  const [patient, setPatient] = useState({});
  const GetPatient = () => {
    setPatient(data.find((obj) => id == obj.id));
  };
  useEffect(() => {
    GetPatient();
  }, []);
  console.log();
  return (
    <div className="edit-containre">
      <section className="dashbord-item  ">
        <PatientCard method={"Modifier"} target={patient} />
      </section>
    </div>
  );
}

export default Edit_Acte;

import React from "react";
import data from "../../Data/data.json";
import { useLoaderData } from "react-router-dom";
import CustomTable from "../../components/CustomTable";
import { columnes } from "../../Data/Columns";

export const GetPatientByDoc = ({ params }) => {
  const List = data.filter((obj) => params.id == obj.doc_id);
  if (!List) return "no patient assing to this doc";
  return List;
};

function Doc() {
  const patientData = useLoaderData();
  console.log("liste =>", patientData);
  return (
    <div className="pt-contanier  bg">
      <CustomTable
        isPatient={true}
        inc_cols={columnes}
        inc_data={patientData}
      />
    </div>
  );
}

export default Doc;

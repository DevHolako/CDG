import React from "react";
import data from "../../Data/data.json";

export const GetPatientByDoc = ({ params }) => {
  const target = data.filter((obj) => params.id == obj.id);
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

function Doc() {
  return <div>Doc</div>;
}

export default Doc;

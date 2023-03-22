import React, { useState } from "react";
const PAYMENT_METHODS = ["card", "chéque", "espece"];
interface Patient {
  id: number;
  nom: string;
  prenom: string;
  acte: string;
  montant?: number;
  method: string;
}

interface PatientCardProps {
  targetPatient?: Patient;
  method: "Modifier" | "ajouter";
}


const PatientCard: React.FC<PatientCardProps> = ({ targetPatient, method }) => {
  const [patient, setPatient] =useState<Patient >( targetPatient || {
    id: 0,
    nom: "",
    prenom: "",
    acte: "",
    montant: undefined,
    method: '',
  });

  const Title =
    method === "ajouter" ? "AJOUTER UN NOUVEAU ACTE" : "MODIFIER UN ACTE";
 

  const handleSubmit = () => {
    console.log(patient);
  };

  return (
    <>
      <div className="container">
        <div className="custom_card shadow">
          <h2 className="card_title">{Title}</h2>

          <div className="inputBox">
            <input
              type="text"
              required
              value={ patient.nom}
              onChange={(e) => {
                setPatient({ ...patient, nom: e.target.value });
              }}
            />
            <span className="user">Nom</span>
          </div>
          <div className="inputBox">
            <input
              type="text"
              required
             value={patient.prenom}
              onChange={(e) => {
                setPatient({ ...patient, prenom: e.target.value });
              }}
            />
            <span className="user">Prenom</span>
          </div>

          <div className="inputBox">
            <input
              type="text"
              required
               value={patient.acte}
              onChange={(e) => {
                setPatient({ ...patient, acte: e.target.value });
              }}
            />
            <span>Acte</span>
          </div>

          <div className="inputBox">
            <input
              type="number"
              required
               value={patient.montant}
              onChange={(e) => {
                setPatient({ ...patient, montant: +(e.target.value) });
              }}
            />
            <span>Montan</span>
          </div>

          <div className="inputBox">
            <select
            required
               value={patient.method}
              onChange={(e) =>
                setPatient({ ...patient, method: e.target.value })
              }
            >
              <optgroup label="Méthodes de payement">
                {PAYMENT_METHODS.map((method) => (
                  <option key={method} value={method}>
                    {method}
                  </option>
                ))}
              </optgroup>
            </select>
            <span>method</span>
          </div>
          <button className="enter" onClick={handleSubmit}>
            {method == "ajouter" ? "Ajouter" : "Modifier" ? "Modifier" : ""}
          </button>
        </div>
      </div>
    </>
  );
};

export default PatientCard;
import React, { useEffect, useState } from "react";

function PatientCard({ method, target }) {
  const [patient, setPatient] = useState({
    id: "",
    nom: "",
    prenom: "",
    acte: "",
    montant: "",
  });
  useEffect(() => {
    if (target) {
      setPatient(target);
    }
  }, [target]);
  console.log("target", target);
  console.log("patient", patient);
  return (
    <>
      <div className="field">
        <label className="label">Nom</label>
        <div className="control">
          <input
            className="input"
            type="text"
            placeholder="Nom"
            value={patient.nom}
            onChange={(e) => {
              setPatient({ ...patient, nom: e.target.value });
            }}
          />
        </div>
      </div>
      <div className="field">
        <label className="label">Prenom</label>
        <div className="control">
          <input
            className="input"
            type="text"
            placeholder="Prenom"
            value={patient.prenom}
            onChange={(e) => {
              setPatient({ ...patient, prenom: e.target.value });
            }}
          />
        </div>
      </div>

      <div className="field">
        <label className="label">Acte</label>
        <div className="control">
          <textarea
            className="textarea"
            placeholder="Textarea"
            value={patient.acte}
            onChange={(e) => {
              setPatient({ ...patient, prenom: e.target.value });
            }}
          ></textarea>
        </div>
      </div>

      <div className="field">
        <label className="label">Montant</label>
        <div className="control">
          <input
            className="input"
            type="number"
            placeholder="Montant"
            value={patient.montant}
            onChange={(e) => {
              setPatient({ ...patient, montant: e.target.value });
            }}
          />
        </div>
      </div>
      <div className="field ">
        <label className="label">Type de paiement</label>
        <div className="control is-expanded">
          <div className="select is-fullwidth">
            <select>
              <option>Select dropdown</option>
              <option>With options</option>
            </select>
          </div>
        </div>
      </div>

      <div className="field is-grouped is-grouped-centered">
        <div className="control">
          <button className="button btn is-info  ">{method}</button>
        </div>
      </div>
    </>
  );
}

export default PatientCard;

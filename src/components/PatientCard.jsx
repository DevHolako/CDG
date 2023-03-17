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
  return (
    <>
      <div class="container">
        <div class="custom_card shadow">
          <h2 class="card_title">
            {method == "ajouter" ? "Ajouter une nouveau acte" : ""}
          </h2>

          <div class="inputBox">
            <input type="text" required="required" />
            <span class="user">Nom</span>
          </div>
          <div class="inputBox">
            <input type="text" required="required" />
            <span class="user">Prenom</span>
          </div>

          <div class="inputBox">
            <input type="text" required="required" />
            <span>Acte</span>
          </div>

          <div class="inputBox">
            <input type="text" required="required" />
            <span>Montan</span>
          </div>

          <div class="inputBox">
            <select>
              <optgroup label="Method">
                <option value="">card</option>
                <option value="">chéque</option>
                <option value="">espace</option>
              </optgroup>
            </select>
            <span>method</span>
          </div>

          <button class="enter">Modifier</button>
        </div>
      </div>
    </>
  );
}

export default PatientCard;

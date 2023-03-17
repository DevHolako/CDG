import React from "react";
function Settings() {
  return (
    <div class="container">
      <div class="custom_card">
        <h2 class="card_title">Profile</h2>

        <div class="inputBox">
          <input type="text" required="required" />
          <span class="user">Nom Complete</span>
        </div>

        <div class="inputBox">
          <input type="text" required="required" />
          <span>Login</span>
        </div>

        <div class="inputBox">
          <input type="password" required="required" />
          <span>Mot de passe actuel</span>
        </div>

        <div class="inputBox">
          <input type="password" required="required" />
          <span>Nouveau mot de passe</span>
        </div>

        <div class="inputBox">
          <input type="password" required="required" />
          <span>Confirmation</span>
        </div>

        <button class="enter">Modifier</button>
      </div>
    </div>
  );
}

export default Settings;

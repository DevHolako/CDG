import React from "react";
import image from "../../assets/login.svg";
import "./styles/login.css";
import { useAtomValue } from "jotai";
import { Role } from "../../App";
import { useNavigate } from "react-router-dom";

function Login() {
  const role = useAtomValue(Role);
  const navto = useNavigate();
  const HandelLogin = () => {
    switch (role) {
      case "réceptionniste":
        navto("/réceptionniste");
        break;

      default:
        break;
    }
  };
  return (
    <>
      <main className="main-login">
        <section className="column">
          <img src={image} alt="login svg" />
        </section>
        <section className="column login_card">
          <div className="field">
            <label className="label"> Login :</label>
            <div className="control">
              <input className="input" type="text" placeholder="Login" />
            </div>
          </div>
          <div className="field">
            <label className="label"> Mot de Passe :</label>
            <div className="control">
              <input
                className="input"
                type="password"
                placeholder="Mot de Passe"
              />
            </div>
          </div>
          <button
            onClick={HandelLogin}
            className="button  is-success is-rounded is-fullwidth"
          >
            login
          </button>
        </section>
      </main>
    </>
  );
}

export default Login;

import React from "react";
import logo from "../../assets/centre-dentaire-logo.svg";
import image from "../../assets/login.svg";
import "./styles/login.css";
import { useNavigate } from "react-router-dom";
function Login() {
  const GoTo = useNavigate();
  const HandelLogin = () => {
    GoTo("/receptionist");
  };
  return (
    <>
      <main className="main-login">
        <section className="column login_section1">
          <img src={image} alt="login svg" />
        </section>
        <section className="column login_section2">
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

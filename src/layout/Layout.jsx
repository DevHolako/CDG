import React from "react";
import Header from "../components/Header";
import "../styles/footer.css";
function Layout({ children }) {
  return (
    <>
      <header className="container">
        <Header />
      </header>
      <main className="container">{children}</main>
      <footer class="footer">
        <div class="waves">
          <div class="wave" id="wave1"></div>
          <div class="wave" id="wave2"></div>
          <div class="wave" id="wave3"></div>
          <div class="wave" id="wave4"></div>
        </div>
      </footer>
    </>
  );
}

export default Layout;

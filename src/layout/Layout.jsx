import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import "../styles/arrow.css";
function Layout() {
  return (
    <>
      <header className="container">
        <Header />
      </header>
      <main className="container ">
        <Outlet />
      </main>
    </>
  );
}

export default Layout;

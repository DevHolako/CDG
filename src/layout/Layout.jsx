import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
function Layout() {
  return (
    <>
      <header className="container">
        <Header />
      </header>
      <main className="container testing">
        <Outlet />
      </main>
    </>
  );
}

export default Layout;

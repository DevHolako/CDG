import React from "react";
import Header from "../components/Header";
function Layout({ children }) {
  return (
    <>
      <header className="container">
        <Header />
      </header>
      <main className="container testing">{children}</main>
    </>
  );
}

export default Layout;

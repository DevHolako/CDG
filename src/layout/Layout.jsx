import React from "react";
import SiedBar from "../components/SiedBar";
function Layout({ children }) {
  return (
    <div className="Layout">
      <SiedBar />
      <main>{children}</main>
    </div>
  );
}

export default Layout;

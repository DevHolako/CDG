import React, { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Layout from "../../layout/Layout";

function Main_Receptionist() {
  const loc = useLocation();
  const go = useNavigate();
  useEffect(() => {
    if (loc.pathname == "/receptionist") {
      go("dashbord");
    }
  }, []);
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
}

export default Main_Receptionist;

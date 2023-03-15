import { atom } from "jotai";
import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Login from "./pages/Login/Login";
import Dashbord from "./pages/Receptionist/Dashbord";
import Edit_Acte from "./pages/Receptionist/Edit_Acte";
import Main_Receptionist from "./pages/Receptionist/index";
import Patients from "./pages/Receptionist/Patients";
import Settings_Receptionist from "./pages/Receptionist/Settings";

export const roleAtom = atom("rece");

function App() {
  return (
    <Routes>
      <Route index element={<Login />} />
      <Route path="/test" element={<Layout />} />
      <Route path="/receptionist" element={<Main_Receptionist />}>
        <Route path="dashbord" element={<Dashbord />} />
        <Route path="patients" element={<Patients />} />
        <Route path="edit/:id" element={<Edit_Acte />} />
        <Route path="settings" element={<Settings_Receptionist />} />
      </Route>
    </Routes>
  );
}

export default App;

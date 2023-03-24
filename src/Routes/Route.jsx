import { createBrowserRouter } from "react-router-dom";
import Settings from "../components/Settings";
import Layout from "../layout/Layout";
import Login from "../pages/Login/Login";
import Dashbord from "../pages/Receptionist/Dashbord";
import Doc from "../pages/Receptionist/Doc";
import Modifier, { GetPatient } from "../pages/Receptionist/Modifier";
import Patients from "../pages/Receptionist/Patients";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "réceptionniste",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Dashbord />,
      },
      {
        path: "patients",
        element: <Patients />,
      },
      {
        path: "setting",
        element: <Settings />,
      },
      {
        path: "edit/:id",
        element: <Modifier />,
        loader: GetPatient,
      },
      {
        path: "doc/:id",
        element: <Doc />,
        loader: GetPatient,
      },
    ],
  },
]);

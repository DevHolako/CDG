import { atom } from "jotai";
import React from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Route";

export const Role = atom("réceptionniste");

function App() {
  return <RouterProvider router={router} />;
}

export default App;


import { atom } from "jotai";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Route";

export const roleAtom = atom("rece");

function App() {
  return <RouterProvider router={router} />;
}

export default App;

// <Routes>
//   <Route index element={<Login />} />
//   <Route path="/test" element={<Layout />} />
//   <Route path="/receptionist" element={<Main_Receptionist />}>
//     <Route path="dashbord" element={<Dashbord />} />
//     <Route path="patients" element={<Patients />} />
//     <Route path="edit/:id" element={<Edit_Acte />} />
//     <Route path="settings" element={<Settings_Receptionist />} />
//   </Route>
// </Routes>

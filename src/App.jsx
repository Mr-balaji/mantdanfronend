import { Routes, Route, Navigate } from "react-router-dom";
import { Dashboard, Auth } from "@/layouts";
import { SignIn } from "./pages/auth";
import "./index.css"
import { Tables } from "./pages/dashboard";
import { AddForm } from "./pages/dashboard/addfrom";

function App() {
  return (
    <Routes>
      <Route path="/tables/*" element={<Tables />} />
      <Route path="/auth/*" element={<Auth />} />
      <Route path="/addform" element={<AddForm />} />
      <Route path="/addform/:id" element={<AddForm />} />
      <Route path="/" element={<SignIn />} />
    </Routes>
  );
}

export default App;

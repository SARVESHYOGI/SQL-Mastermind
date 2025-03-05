import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Questionnaire from "./components/Questionnaire";
import Home from "./pages/Home";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/register";
import SQLKit from "./pages/SQLKit";
import PlanPage from "./pages/PlanPage";
import NoPage from "./pages/NoPage";
import DashBoard from "./pages/DashBoard";
import Layout from "./pages/Layout";



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<Layout />} >
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/register" element={<Register />} />
          <Route path="/questionnaire" element={<Questionnaire />} />
          <Route path="/generatedplans" element={<SQLKit />} />
          <Route path="/seeplan/:id" element={<PlanPage />} />
          <Route path="/*" element={<NoPage />} />
        </Route>


      </Routes>
    </Router>
  );
}

export default App;
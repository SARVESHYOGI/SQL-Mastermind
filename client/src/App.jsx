import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Questionnaire from "./components/Questionnaire";
import Home from "./pages/Home";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/register";
import SQLKit from "./pages/SQLKit";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/register" element={<Register />} />
        <Route path="/questionnaire" element={<Questionnaire />} />
        <Route path="/sql-kit" element={<SQLKit />} />
      </Routes>
    </Router>
  );
}

export default App;
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Questionnaire from "./components/Questionnaire";
import SQLKit from "./components/SQLKit";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/questionnaire" element={<Questionnaire />} />
        <Route path="/sql-kit" element={<SQLKit />} />
      </Routes>
    </Router>
  );
}

export default App;
import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard/*" element={<Dashboard />} />
        <Route path="/admin/*" element={<Dashboard />} />
        <Route path="*" element={<Login />} />
      </Routes>
      <ToastContainer />
    </div>
  );
};

export default App;

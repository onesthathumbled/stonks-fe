import React from "react";
import { Routes, Route } from "react-router-dom";

import AdminNavbar from "./AdminNavbar";
import Home from "./Home";
import Traders from "./Traders";
import Transactions from "./Transactions";

import "../../styles/admin/AdminDashboard.css";

const AdminDashboard = () => {
  return (
    <div className="Admin-Dashboard-Container">
      <AdminNavbar />
      {/* <div className="App-Flex"> */}
      <div className="Admin-Dashboard-Body">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/traders" element={<Traders />} />
          <Route path="/transactions" element={<Transactions />} />
        </Routes>
      </div>
      {/* </div> */}
    </div>
  );
};

export default AdminDashboard;

import React, { useEffect } from "react";
import Navbar from "./Navbar";
import { useSelector } from "react-redux";
import { Routes, Route, useNavigate } from "react-router-dom";
import MainHolder from "./MainHolder";
import Trending from "./Trending";
import Portfolio from "./Portfolio";
import Transactions from "./Transactions";
import Traders from "./admin/Traders";
import AdminTransaction from "./admin/AdminTransactions";
import "../styles/Dashboard.css";

const Dashboard = () => {
  const auth = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const userRole = useSelector((state) => state.auth?.user?.data?.roles);

  useEffect(() => {
    if (!auth.user) {
      navigate("/");
    }
  }, [auth.user, navigate]);

  return (
    <>
      {userRole === 0 ? (
        <div className="Dashboard">
          <Navbar />
          <div className="Dashboard-Body">
            <Routes>
              <Route path="/main" element={<MainHolder />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/transactions" element={<Transactions />} />
              <Route path="/trending" element={<Trending />} />
            </Routes>
          </div>
        </div>
      ) : (
        <div className="Admin-Dashboard-Container">
          <Navbar />
          <div className="Admin-Dashboard-Body">
            <Routes>
              <Route path="/main" element={<MainHolder />} />
              <Route path="/traders" element={<Traders />} />
              <Route path="/transactions" element={<AdminTransaction />} />
            </Routes>
          </div>
        </div>
      )}
    </>
  );
};

export default Dashboard;

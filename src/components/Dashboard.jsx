import React, { useEffect } from "react";
import Navbar from "./Navbar";
import { useSelector } from "react-redux";
import { Routes, Route, useNavigate } from "react-router-dom";
import MainHolder from "./MainHolder";
import Trending from "./Trending";
import Portfolio from "./Portfolio";
import Transactions from "./Transactions";
import "../styles/Dashboard.css";
import Wallet from "./Wallet";

const Dashboard = () => {
  const auth = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (!auth.user?.data?.confirmed_at) {
      navigate("/");
    }
  }, [auth.user, navigate]);

  return (
    <div className="Dashboard">
      <Navbar />
      {/* <div className="App-Flex"> */}
      <div className="Dashboard-Body">
        <Routes>
          <Route path="/main" element={<MainHolder />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/wallet" element={<Wallet />} />
        </Routes>
      </div>
      {/* </div> */}
    </div>
  );
};

export default Dashboard;

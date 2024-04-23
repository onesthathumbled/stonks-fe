import React, { useEffect } from "react";
import Navbar from "./Navbar";
import { useSelector } from "react-redux";
import { Routes, Route, useNavigate } from "react-router-dom";
import MainHolder from "./MainHolder";
import Trending from "./Trending";
import Portfolio from "./Portfolio";
import Transactions from "./Transactions";

const Dashboard = () => {
  const auth = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (!auth.user) {
      navigate("/");
    }
  }, [auth.user, navigate]);

  return (
    <div className="Dashboard">
      <Navbar />
      {/* <div className="App-Flex"> */}
      <div>
        <Routes>
          <Route path="/main" element={<MainHolder />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/trending" element={<Trending />} />
        </Routes>
      </div>
      {/* </div> */}
    </div>
  );
};

export default Dashboard;

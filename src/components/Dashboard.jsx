import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Board from "./Board";
import MainSymbol from "./MainSymbol";
import Chart from "./Chart";
import Trade from "./Trade";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

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
      <div className="App-Flex">
        <div>
          <Board />
          <MainSymbol />
          <Chart />
        </div>
        <Trade />
      </div>
    </div>
  );
};

export default Dashboard;

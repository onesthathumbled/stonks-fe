import React from "react";
import Board from "./Board";
import MainSymbol from "./MainSymbol";
import Chart from "./Chart";
import Trade from "./Trade";

const DashboardHolder = () => {
  return (
    <div className="App-Flex">
      <div>
        <Board />
        <MainSymbol />
        <Chart />
      </div>
      <Trade />
    </div>
  );
};

export default DashboardHolder;

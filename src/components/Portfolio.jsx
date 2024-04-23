import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { portfolio } from "../features/auth/authSlice";
import "../styles/Portfolio.css";

const Portfolio = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.auth?.portfolio);

  useEffect(() => {
    dispatch(portfolio());
  }, [dispatch]);

  return (
    <div className="Portfolio">
      <h2 className="PTitle">Portfolio</h2>
      <div className="PTable">
        <table>
          <thead>
            <tr>
              <th>Symbol</th>
              <th>Company Name</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{item.symbol}</td>
                <td>{item.company_name}</td>
                <td>{item.quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Portfolio;

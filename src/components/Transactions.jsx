import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { transactions } from "../features/auth/authSlice";
import "../styles/Portfolio.css";

const Transactions = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.auth?.transactions);

  useEffect(() => {
    dispatch(transactions());
  }, [dispatch]);

  return (
    <div className="Portfolio">
      <h2 className="PTitle">Transactions</h2>
      <div className="PTable">
        <table>
          <thead>
            <tr>
              <th>Symbol</th>
              <th>Company Name</th>
              <th>Quantity</th>
              <th>Price Per Stock</th>
              <th>Date</th>
              <th>Total Amount</th>
            </tr>
          </thead>
          <tbody>
            {
              data ? (
                data.map((item, index) => (
                  <tr key={index}>
                    <td>{item.symbol}</td>
                    <td>{item.company_name}</td>
                    <td>{item.quantity}</td>
                    <td>{item.price_per_stock}</td>
                    <td>{item.date}</td>
                    <td>${item.total_amount}</td>
                  </tr>
                ))
              ):
              null
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Transactions;

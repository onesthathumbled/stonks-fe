import React, { useEffect } from "react";
import '../../styles/admin/Transactions.css'
import { useDispatch, useSelector } from "react-redux";
import { allTransactions } from "../../features/auth/authSlice";

const AdminTransaction = () => {
    
    const dispatch = useDispatch();
    const data = useSelector((state) => state.auth?.transactions);

    useEffect(() => {
        dispatch(allTransactions());
    }, [dispatch]);

    return (
        <div className="Admin-Transactions-Container">
            <div className="Admin-Transactions-Body">
                <div className = "Admin-Transactions-Left-Container">
                    <div className="Admin-Transactions-Left-Title">
                        Transaction Lists
                    </div>
                    <div className="Admin-Transaction-Table-Container">
                        <table className = "Admin-Transaction-Table">
                            <thead>
                                <th>Date</th>
                                <th>User Email</th>
                                <th>Stock Symbol</th>
                                <th>Company Name</th>
                                <th>Quantity</th>
                                <th>Transaction Type</th>
                                <th>Total Amount</th>
                            </thead>
                            <tbody>
                                {
                                    data ? (
                                        data.map((item, index) => (
                                            <tr key={index}>
                                                <td>{item.date}</td>
                                                <td>{item.user_email}</td>
                                                <td>{item.symbol}</td>
                                                <td>{item.company_name}</td>
                                                <td>{item.quantity}</td>
                                                <td>{item.transaction_type}</td>
                                                <td>₱{item.total_amount.toFixed(2)}</td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan="7">No transactions available.</td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className = "Admin-Transactions-Right-Container">
                </div>
            </div>
        </div>
    );
    };

export default AdminTransaction;

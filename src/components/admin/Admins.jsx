
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../../styles/admin/Current.css';
import { adminUsers, getPendingUserInfo,setUserInfoShowStatus } from '../../features/auth/authSlice';

const Admins = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.auth?.adminUsers);

  const getUserInfo = (id) => {
    dispatch(getPendingUserInfo(id));
    dispatch(setUserInfoShowStatus('info'));
  };

  useEffect(() => {
      dispatch(adminUsers());
  }, [dispatch]);

return (
  <div className="Pending-Table-Container">
      <table className = 'Pending-Table'>
        <thead>
          <th>Email</th>
          <th>Role</th>
          <th>Status</th>
          <th>Date Joined</th>
        </thead>
        <tbody>
        {
            data ? (
              data.map((item, index) => (
                <tr key={index}  onClick={() => getUserInfo(item.id)}>
                  <td>{item.email}</td>
                  <td>{item.roles === 0 ? "Trader" : "Admin"}</td>
                  <td>Authenticated</td>
                  <td>{new Date(item.created_at).toLocaleDateString()}</td>
                </tr>
              ))
            ) : (
                <tr>
                    <td colSpan="5">No pending users available.</td>
                </tr>
            )
        }
        </tbody>
      </table>
  </div>
);
};

export default Admins;

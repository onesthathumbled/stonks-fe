import { useEffect } from 'react';
import '../../styles/admin/Pending.css';
import { useDispatch, useSelector } from 'react-redux';
import { pendingUser, getPendingUserInfo, setUserInfoShowStatus} from '../../features/auth/authSlice';

const Pending = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.auth?.pendingUsers);

  const getUserInfo = (id) => {
    dispatch(getPendingUserInfo(id));
    dispatch(setUserInfoShowStatus("info"));
  };

  useEffect(() => {
    dispatch(pendingUser());
  }, [dispatch]);

  return (
    <div className="Pending-Table-Container">
      <table className="Pending-Table">
        <thead>
          <tr>
            <th>Email</th>
            <th>Role</th>
            <th>Status</th>
            <th>Date Joined</th>
          </tr>
        </thead>
        <tbody>
          {data ? (
            data.map((item, index) => (
              <tr key={index} onClick={() => getUserInfo(item.id)}>
                <td>{item.email}</td>
                <td>{item.roles === 0 ? "Trader" : "Admin"}</td>
                <td>Pending</td>
                <td>{new Date(item.created_at).toLocaleDateString()}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">No pending users available.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Pending;

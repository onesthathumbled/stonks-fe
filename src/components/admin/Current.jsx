
import { useState } from 'react';
import '../../styles/admin/Current.css';

const Current = () => {
  let sampleData = [
    {
        "id": 2,
        "email": "mark@tests.com",
        "created_at": "2024-04-10T11:44:34.640Z",
        "updated_at": "2024-04-10T11:44:34.640Z",
        "jti": "2793dbc7-1e72-44a0-ae95-d7636201638d",
        "status": true,
        "roles": 0,
        "wallet": "2000.0"
    }
]

const [ pendingUser, setPendingUser ] = useState(sampleData);


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
            pendingUser.length !== 0 ? (
              pendingUser.map(pendingUser => (
                <tr key={pendingUser.id}>
                  <td>{pendingUser.email}</td>
                  <td>{pendingUser.roles === 0 ? "Trader" : "Admin"}</td>
                  <td>Authenticated</td>
                  <td>{new Date(pendingUser.created_at).toLocaleDateString()}</td>
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

export default Current;

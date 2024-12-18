import React, { useState } from 'react';
import './Tradercontacts.css'; // Import CSS file

const DummyDatabase = () => {
  const [users, setUsers] = useState([]);

  // Function to generate dummy data
  const generateData = () => {
    const dummyData = [];
    for (let i = 0; i < 100; i++) {
      const user = {
        name: `User ${i + 1}`,
        mobile: `${Math.floor(Math.random() * 10000000000)}`,
        email: `user${i + 1}@example.com`,
        shopName: `Shop ${i + 1}`,
        userType: i % 2 === 0 ? 'Admin' : 'User'
      };
      dummyData.push(user);
    }
    setUsers(dummyData);
  };

  return (
    <div>
      <h2>Trader Database</h2>
      <button onClick={generateData}>Generate Data</button>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Mobile</th>
            <th>Email</th>
            <th>Shop Name</th>
            <th>User Type</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.mobile}</td>
              <td>{user.email}</td>
              <td>{user.shopName}</td>
              <td>{user.userType}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DummyDatabase;

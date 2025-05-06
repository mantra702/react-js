// ViewPage.js
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

function ViewPage() {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [sortOrder, setSortOrder] = useState('');
  const [selectedIndices, setSelectedIndices] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('users')) || [];
    setUsers(data);
  }, []);

  const handleCheckboxChange = (index) => {
    setSelectedIndices(
      selectedIndices.includes(index)
        ? selectedIndices.filter(i => i !== index)
        : [...selectedIndices, index]
    );
  };

  const deleteSelected = () => {
    const updatedUsers = users.filter((_, i) => !selectedIndices.includes(i));
    setUsers(updatedUsers);
    setSelectedIndices([]);
    localStorage.setItem('users', JSON.stringify(updatedUsers));
  };

  const updateStatusSelected = (newStatus) => {
    const updatedUsers = users.map((user, i) =>
      selectedIndices.includes(i) ? { ...user, status: newStatus } : user
    );
    setUsers(updatedUsers);
    setSelectedIndices([]);
    localStorage.setItem('users', JSON.stringify(updatedUsers));
  };

  const filteredUsers = users
    .filter(user =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (statusFilter ? user.status === statusFilter : true)
    )
    .sort((a, b) => {
      if (sortOrder === 'az') return a.name.localeCompare(b.name);
      if (sortOrder === 'za') return b.name.localeCompare(a.name);
      return 0;
    });

  return (
    <div>
      <h2>View Users</h2>

      <div className="filters">
        <input type="text" placeholder="Search by name" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        <select onChange={(e) => setStatusFilter(e.target.value)} value={statusFilter}>
          <option value="">--select status--</option>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>
        <select onChange={(e) => setSortOrder(e.target.value)} value={sortOrder}>
          <option value="">--select sorting--</option>
          <option value="az">A-Z</option>
          <option value="za">Z-A</option>
        </select>
      </div>

      {selectedIndices.length > 0 && (
        <div className="bulk-actions">
          <button onClick={deleteSelected}>Delete Selected</button>
          <button onClick={() => updateStatusSelected('active')}>Set Active</button>
          <button onClick={() => updateStatusSelected('inactive')}>Set Inactive</button>
        </div>
      )}

      <table className="user-table">
        <thead>
          <tr>
            <th>Select</th>
            <th>Sno</th>
            <th>Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Courses</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((u, i) => (
            <tr key={i}>
              <td>
                <input
                  type="checkbox"
                  checked={selectedIndices.includes(i)}
                  onChange={() => handleCheckboxChange(i)}
                />
              </td>
              <td>{i + 1}</td>
              <td>{u.name}</td>
              <td>{u.email}</td>
              <td>{u.gender}</td>
              <td>{u.courses.join(', ')}</td>
              <td>{u.date}</td>
              <td>{u.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ViewPage;

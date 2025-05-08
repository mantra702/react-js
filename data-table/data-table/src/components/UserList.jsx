import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [sortOption, setSortOption] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('users')) || [];
    setUsers(data);
  }, []);

  const handleDelete = id => {
    const filtered = users.filter(user => user.id !== id);
    localStorage.setItem('users', JSON.stringify(filtered));
    setUsers(filtered);
  };

  const handleSearch = e => setSearchTerm(e.target.value.toLowerCase());
  const handleStatusChange = e => setStatusFilter(e.target.value);
  const handleSortChange = e => setSortOption(e.target.value);

  const getFilteredAndSortedUsers = () => {
    let filtered = [...users];

    if (searchTerm) {
      filtered = filtered.filter(user =>
        user.name.toLowerCase().includes(searchTerm) ||
        user.email.toLowerCase().includes(searchTerm)
      );
    }

    if (statusFilter) {
      filtered = filtered.filter(user => user.status === statusFilter);
    }

    if (sortOption === 'name-asc') {
      filtered.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortOption === 'name-desc') {
      filtered.sort((a, b) => b.name.localeCompare(a.name));
    }

    return filtered;
  };

  const displayedUsers = getFilteredAndSortedUsers();

  return (
    <div className="container mt-5">
      <div className="card shadow-sm">
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-center mb-3 flex-wrap gap-2">
            <div className="d-flex gap-2 flex-wrap">
              <select
                className="form-select form-select-sm w-auto"
                value={statusFilter}
                onChange={handleStatusChange}
              >
                <option value="">All Status</option>
                <option value="active">Active</option>
                <option value="unactive">Unactive</option>
              </select>

              <input
                type="text"
                placeholder="Search by name/email"
                className="form-control form-control-sm w-auto"
                value={searchTerm}
                onChange={handleSearch}
              />

              <select
                className="form-select form-select-sm w-auto"
                value={sortOption}
                onChange={handleSortChange}
              >
                <option value="">Sort by Name</option>
                <option value="name-asc">A → Z</option>
                <option value="name-desc">Z → A</option>
              </select>
            </div>

            <button className="btn btn-success btn-sm" onClick={() => navigate('/add')}>
              ➕ Add
            </button>
          </div>

          <div className="table-responsive">
            <table className="table table-striped table-hover table-bordered align-middle">
              <thead className="table-primary text-center">
                <tr>
                  <th>Sr No</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Gender</th>
                  <th>Course</th>
                  <th>Date</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody className="text-center">
                {displayedUsers.length === 0 ? (
                  <tr>
                    <td colSpan="8" className="text-muted">No users found.</td>
                  </tr>
                ) : (
                  displayedUsers.map((u, i) => (
                    <tr key={u.id}>
                      <td>{i + 1}</td>
                      <td>{u.name}</td>
                      <td>{u.email}</td>
                      <td>{u.gender}</td>
                      <td>{u.courses.join(', ')}</td>
                      <td>{u.date}</td>
                      <td>
                        <span className={`badge bg-${u.status === 'active' ? 'success' : 'secondary'}`}>
                          {u.status}
                        </span>
                      </td>
                      <td>
                        <div className="d-flex justify-content-center gap-2">
                          <button className="btn btn-danger btn-sm" onClick={() => handleDelete(u.id)}>
                            Delete
                          </button>
                          <button className="btn btn-primary btn-sm" onClick={() => navigate(`/edit/${u.id}`)}>
                            Edit
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserList;


import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const UserForm = () => {
  const [user, setUser] = useState({
    name: '', email: '', password: '', gender: '',
    courses: [], date: '', status: ''
  });
  const navigate = useNavigate();

  useEffect(() => {
    // Ensure password and email are cleared when the page loads
    setUser(prevUser => ({
      ...prevUser,
      email: '',
      password: ''
    }));
  }, []);

  const handleChange = e => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setUser(prev => ({
        ...prev,
        courses: checked
          ? [...prev.courses, value]
          : prev.courses.filter(c => c !== value)
      }));
    } else {
      setUser(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const existing = JSON.parse(localStorage.getItem('users')) || [];
    const newUser = { ...user, id: Date.now() };
    localStorage.setItem('users', JSON.stringify([...existing, newUser]));
    navigate('/');
  };

  const courseOptions = [
    'html', 'css', 'bootstrap', 'js', 'react js',
    'node js', 'php', 'angular', 'python', 'laravel'
  ];

  return (
    <div className="container mt-5">
      <div className="card shadow-sm">
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h4 className="mb-0">Add New User</h4>
            <button className="btn btn-outline-primary" onClick={() => navigate('/')}> View All</button>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Name:</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="form-control"
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Email:</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="form-control"
                value={user.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Password:</label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                className="form-control"
                value={user.password}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Gender:</label><br />
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="gender"
                  value="male"
                  onChange={handleChange}
                />
                <label className="form-check-label">Male</label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="gender"
                  value="female"
                  onChange={handleChange}
                />
                <label className="form-check-label">Female</label>
              </div>
            </div>

            <div className="mb-3">
              <label className="form-label">Courses:</label>
              <div className="d-flex flex-wrap gap-2">
                {courseOptions.map(course => (
                  <div className="form-check form-check-inline" key={course}>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value={course}
                      onChange={handleChange}
                    />
                    <label className="form-check-label">{course}</label>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-3">
              <label className="form-label">Date:</label>
              <input
                type="date"
                name="date"
                className="form-control"
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-4">
              <label className="form-label">Status:</label>
              <select
                name="status"
                className="form-select"
                onChange={handleChange}
                required
              >
                <option value="">--- Select Status ---</option>
                <option value="active">Active</option>
                <option value="unactive">Unactive</option>
              </select>
            </div>

            <button type="submit" className="btn btn-success"> Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserForm;

import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const EditUser = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const all = JSON.parse(localStorage.getItem('users')) || [];
    const existing = all.find(u => u.id === parseInt(id));
    if (existing) setUser(existing);
  }, [id]);

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
    const all = JSON.parse(localStorage.getItem('users')) || [];
    const updated = all.map(u => (u.id === parseInt(id) ? user : u));
    localStorage.setItem('users', JSON.stringify(updated));
    navigate('/');
  };

  if (!user) return <div className="text-center mt-4">Loading...</div>;

  const courseOptions = [
    'html', 'css', 'bootstrap', 'js', 'react js',
    'node js', 'php', 'angular', 'python', 'laravel'
  ];

  return (
    <div className="container mt-5">
      <div className="card shadow-sm">
        <div className="card-body">
          <h4 className="mb-4">✏️ Edit User</h4>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Name:</label>
              <input type="text" name="name" value={user.name} className="form-control" onChange={handleChange} required />
            </div>

            <div className="mb-3">
              <label className="form-label">Email:</label>
              <input type="email" name="email" value={user.email} className="form-control" onChange={handleChange} required />
            </div>

            <div className="mb-3">
              <label className="form-label">Gender:</label><br />
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="gender" value="male" checked={user.gender === 'male'} onChange={handleChange} />
                <label className="form-check-label">Male</label>
              </div>
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="gender" value="female" checked={user.gender === 'female'} onChange={handleChange} />
                <label className="form-check-label">Female</label>
              </div>
            </div>

            <div className="mb-3">
              <label className="form-label">Courses:</label><br />
              <div className="d-flex flex-wrap gap-2">
                {courseOptions.map(c => (
                  <div className="form-check form-check-inline" key={c}>
                    <input
                      type="checkbox"
                      className="form-check-input"
                      value={c}
                      checked={user.courses.includes(c)}
                      onChange={handleChange}
                    />
                    <label className="form-check-label">{c}</label>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-3">
              <label className="form-label">Date:</label>
              <input type="date" name="date" value={user.date} className="form-control" onChange={handleChange} required />
            </div>

            <div className="mb-4">
              <label className="form-label">Status:</label>
              <select name="status" value={user.status} className="form-select" onChange={handleChange} required>
                <option value="">---select status---</option>
                <option value="active">Active</option>
                <option value="unactive">Unactive</option>
              </select>
            </div>

            <button type="submit" className="btn btn-success">✅ Update</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditUser;

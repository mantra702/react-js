// FormPage.js
import React, { useState, useEffect } from 'react';

function FormPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    gender: '',
    courses: [],
    date: '',
    status: '',
  });

  const [users, setUsers] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('users')) || [];
    setUsers(data);
  }, []);

  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(users));
  }, [users]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox' && name === 'courses') {
      const updatedCourses = checked
        ? [...form.courses, value]
        : form.courses.filter((c) => c !== value);
      setForm({ ...form, courses: updatedCourses });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedUsers = [...users];
    if (editIndex !== null) {
      updatedUsers[editIndex] = form;
      setEditIndex(null);
    } else {
      updatedUsers.push(form);
    }
    setUsers(updatedUsers);
    setForm({ name: '', email: '', password: '', gender: '', courses: [], date: '', status: '' });
  };

  return (
    <div>
      <h2>User Form</h2>
      <form onSubmit={handleSubmit} className="form d-flex justify-content-center flex-column">
        <input name="name" placeholder="Name" value={form.name} onChange={handleChange} required />
        <input name="email" placeholder="Email" value={form.email} onChange={handleChange} required />
        <input name="password" placeholder="Password" value={form.password} onChange={handleChange} required />
        <div className="inline">
          Gender:
          <label><input type="radio" name="gender" value="male" onChange={handleChange} checked={form.gender === 'male'} /> Male</label>
          <label><input type="radio" name="gender" value="female" onChange={handleChange} checked={form.gender === 'female'} /> Female</label>
        </div>
        <div className="checkbox-group">
          Courses:
          {['html', 'css', 'bootstrap', 'js', 'react js', 'node js', 'php', 'angular', 'python', 'laravel'].map(course => (
            <label key={course}>
              <input
                type="checkbox"
                name="courses"
                value={course}
                checked={form.courses.includes(course)}
                onChange={handleChange}
                className='me-1'
              /> {course}
            </label>
          ))}
        </div>
        <input name="date" type="date" value={form.date} onChange={handleChange} required />
        <select name="status" value={form.status} onChange={handleChange} required>
          <option value="">--select status--</option>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>
        <button type="submit">{editIndex !== null ? 'Update' : 'Submit'}</button>
      </form>
    </div>
  );
}

export default FormPage;

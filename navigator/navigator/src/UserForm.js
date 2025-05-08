import React, { useState, useEffect } from 'react';

const UserForm = ({ initialData = {}, onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '', email: '', password: '', gender: '', course: [], date: '', status: ''
  });

  useEffect(() => {
    setFormData({ ...formData, ...initialData });
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      const newCourses = checked
        ? [...formData.course, value]
        : formData.course.filter((c) => c !== value);
      setFormData({ ...formData, course: newCourses });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input type="text" name="name" placeholder="Enter Your Name" value={formData.name} onChange={handleChange} className="input" required />
      <input type="email" name="email" placeholder="Enter Your Email" value={formData.email} onChange={handleChange} className="input" required />
      <input type="password" name="password" placeholder="Enter Your Password" value={formData.password} onChange={handleChange} className="input" required />

      <div>
        Gender:
        <label><input type="radio" name="gender" value="male" checked={formData.gender === 'male'} onChange={handleChange} /> Male</label>
        <label><input type="radio" name="gender" value="female" checked={formData.gender === 'female'} onChange={handleChange} /> Female</label>
      </div>

      <div>
        Course:
        {['html', 'css', 'js', 'react js', 'node js', 'php', 'angular', 'python', 'laravel'].map(course => (
          <label key={course} className="mr-2">
            <input type="checkbox" name="course" value={course} checked={formData.course.includes(course)} onChange={handleChange} /> {course}
          </label>
        ))}
      </div>

      <input type="date" name="date" value={formData.date} onChange={handleChange} className="input" required />

      <select name="status" value={formData.status} onChange={handleChange} className="input" required>
        <option value="">---select status---</option>
        <option value="active">active</option>
        <option value="unactive">unactive</option>
      </select>

      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Submit</button>
    </form>
  );
};

export default UserForm;

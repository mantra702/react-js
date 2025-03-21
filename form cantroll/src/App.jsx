import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
    gender: "",
    hobby: []
  });

  const [error, setError] = useState({});

  const hobbiesList = ["Reading", "Coding", "Eating"];

  const handleChange = (event) => {
    if (event.target.type === 'checkbox') {
      setFormData({
        ...formData,
        hobby: event.target.checked
          ? [...formData.hobby, event.target.value]
          : formData.hobby.filter((data) => data !== event.target.value)
      });
    } else {
      setFormData({
        ...formData,
        [event.target.name]: event.target.value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let formError = {
      userName: "",
      email: "",
      password: "",
    };

    if (!formData.userName) formError.userName = "Please enter username";
    if (!formData.email) formError.email = "Please enter email";
    if (!formData.password) formError.password = "Please enter password";
    if (!formData.gender) formError.gender = "Please choice any gender";
    if (formData.hobby.length == 0) formError.hobby = "Please choice your hobbies";

    setError(formError);

    console.log(formData);

  };

  return (
    <>
      <div className='container d-flex justify-content-center align-items-center vh-100'>
        <div className='card shadow-lg p-4' style={{ width: '30rem' }}>
          <h2 className='text-center mb-4'>User Registration</h2>
          <form onSubmit={handleSubmit}>
            <div className='mb-3'>
              <label className='form-label'>Username</label>
              <input type='text' name='userName' className='form-control' value={formData.userName} onChange={handleChange} placeholder='Enter your username' />
              {error.userName && <div className='text-danger'>
                <span>{error.userName}</span>
              </div>}
            </div>

            <div className='mb-3'>
              <label className='form-label'>Email</label>
              <input type='email' name='email' className='form-control' value={formData.email} onChange={handleChange} placeholder='Enter your email' />
              {error.email && <div className='text-danger'>
                <span>{error.email}</span>
              </div>}
            </div>

            <div className='mb-3'>
              <label className='form-label'>Password</label>
              <input type='password' name='password' className='form-control' value={formData.password} onChange={handleChange} placeholder='Enter your password' />
              {error.password && <div className='text-danger'>
                <span>{error.password}</span>
              </div>}
            </div>

            <label className='form-label'>Gender</label>
            <div className='mb-3 d-flex gap-3'>
              <div className='form-check'>
                <input className='form-check-input' type='radio' name='gender' value='Male' onChange={handleChange} />
                <label className='form-check-label'> Male</label>
              </div>
              <div className='form-check'>
                <input className='form-check-input' type='radio' name='gender' value='Female' onChange={handleChange} />
                <label className='form-check-label'> Female</label>
              </div>
            </div>
            {error.gender && <div className='text-danger'>
              <span>{error.gender}</span>
            </div>}

            <label className='form-label'>Hobbies</label>
            <div className='mb-3'>
              {hobbiesList.map((hobby, index) => (
                <div key={index} className='form-check'>
                  <input className='form-check-input' type='checkbox' value={hobby} onChange={handleChange} />
                  <label className='form-check-label'> {hobby}</label>
                </div>
              ))}
              {error.hobby && <div className='text-danger'>
                <span>{error.hobby}</span>
              </div>}
            </div>

            <button type='submit' className='btn btn-primary w-100'>Submit</button>
          </form>
        </div>
      </div>
    </>
  );
}
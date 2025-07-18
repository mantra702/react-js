import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function EditRoom() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [room, setRoom] = useState({ number: '', type: '', status: 'Available' });

  useEffect(() => {
    axios.get(`http://localhost:3001/rooms/${id}`).then(res => setRoom(res.data));
  }, [id]);

  const handleChange = e => {
    setRoom({ ...room, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    await axios.put(`http://localhost:3001/rooms/${id}`, room);
    navigate('/rooms');
  };

  return (
    <div className="container mt-4">
      <h2>Edit Room</h2>
      <form onSubmit={handleSubmit} className="row g-3 mt-2">
        <div className="col-md-4">
          <label className="form-label">Room Number</label>
          <input type="text" className="form-control" name="number" value={room.number} onChange={handleChange} />
        </div>

        <div className="col-md-4">
          <label className="form-label">Room Type</label>
          <input type="text" className="form-control" name="type" value={room.type} onChange={handleChange} />
        </div>

        <div className="col-md-4">
          <label className="form-label">Status</label>
          <select className="form-select" name="status" value={room.status} onChange={handleChange}>
            <option value="Available">Available</option>
            <option value="Booked">Booked</option>
          </select>
        </div>

        <div className="col-12 mt-3">
          <button type="submit" className="btn btn-success">Update Room</button>
        </div>
      </form>
    </div>
  );
}

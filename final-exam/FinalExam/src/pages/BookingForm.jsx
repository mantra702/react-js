import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRooms, fetchCustomers, fetchBookings } from '../redux/actions/hotelActions';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function BookingForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { rooms, customers } = useSelector(state => state.hotel);
  const [roomId, setRoomId] = useState('');
  const [customerId, setCustomerId] = useState('');
  const [date, setDate] = useState('');

  useEffect(() => {
    dispatch(fetchRooms());
    dispatch(fetchCustomers());
  }, [dispatch]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!roomId || !customerId || !date) return alert('All fields required');

    await axios.post('http://localhost:3001/bookings', {
      roomId: Number(roomId),
      customerId: Number(customerId),
      date
    });

    await axios.patch(`http://localhost:3001/rooms/${roomId}`, {
      status: 'Booked'
    });

    dispatch(fetchBookings());
    dispatch(fetchRooms());
    navigate('/bookings');
  };

  const availableRooms = rooms.filter(r => r.status === 'Available');

  return (
    <div className="container mt-4">
      <h2>Book a Room</h2>
      <form onSubmit={handleSubmit} className="row g-3 mt-2">
        <div className="col-md-4">
          <label className="form-label">Customer</label>
          <select className="form-select" value={customerId} onChange={e => setCustomerId(e.target.value)}>
            <option value="">Select Customer</option>
            {customers.map(c => (
              <option key={c.id} value={c.id}>{c.name}</option>
            ))}
          </select>
        </div>

        <div className="col-md-4">
          <label className="form-label">Room</label>
          <select className="form-select" value={roomId} onChange={e => setRoomId(e.target.value)}>
            <option value="">Select Room</option>
            {availableRooms.map(r => (
              <option key={r.id} value={r.id}>Room {r.number} ({r.type})</option>
            ))}
          </select>
        </div>

        <div className="col-md-4">
          <label className="form-label">Date</label>
          <input type="date" className="form-control" value={date} onChange={e => setDate(e.target.value)} />
        </div>

        <div className="col-12 mt-3">
          <button type="submit" className="btn btn-primary">Book Room</button>
        </div>
      </form>
    </div>
  );
}
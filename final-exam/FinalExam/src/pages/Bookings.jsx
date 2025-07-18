import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBookings, fetchRooms, fetchCustomers } from '../redux/actions/hotelActions';

export default function Bookings() {
  const dispatch = useDispatch();
  const { bookings, rooms, customers } = useSelector(state => state.hotel);

  useEffect(() => {
    dispatch(fetchBookings());
    dispatch(fetchRooms());
    dispatch(fetchCustomers());
  }, [dispatch]);

  const getRoomNumber = (id) => {
    const room = rooms.find(r => r.id === id);
    return room ? room.number : 'N/A';
  };

  const getCustomerName = (id) => {
    const customer = customers.find(c => c.id === id);
    return customer ? customer.name : 'N/A';
  };

  return (
    <div className="container mt-4">
      <h2>Bookings</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>Room</th>
            <th>Customer</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map(booking => (
            <tr key={booking.id}>
              <td>{booking.id}</td>
              <td>{getRoomNumber(booking.roomId)}</td>
              <td>{getCustomerName(booking.customerId)}</td>
              <td>{booking.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

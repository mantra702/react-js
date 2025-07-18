import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRooms, fetchCustomers, fetchBookings } from '../redux/actions/hotelActions';
import HotelCard from '../components/HotelCard';

export default function Dashboard() {
  const dispatch = useDispatch();
  const { rooms, customers, bookings } = useSelector(state => state.hotel);

  useEffect(() => {
    dispatch(fetchRooms());
    dispatch(fetchCustomers());
    dispatch(fetchBookings());
  }, [dispatch]);

  const bookedRooms = rooms.filter(r => r.status === 'Booked').length;

  return (
    <div className="container mt-4">
      <h2>Dashboard</h2>
      <div className="row">
        <HotelCard title="Total Rooms" value={rooms.length}/>
        <HotelCard title="Booked Rooms" value={bookedRooms}/>
        <HotelCard title="Customers" value={customers.length}/>
        <HotelCard title="Bookings" value={bookings.length}/>
      </div>
    </div>
  );
}

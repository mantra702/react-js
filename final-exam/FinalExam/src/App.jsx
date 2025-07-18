import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import Rooms from './pages/Rooms';
import Customers from './pages/Customers';
import Bookings from './pages/Bookings';
import BookingForm from './pages/BookingForm';
import EditRoom from './pages/EditRoom';

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/bookings" element={<Bookings />} />
        <Route path="/book-room" element={<BookingForm />} />
        <Route path="/edit-room/:id" element={<EditRoom />} />
      </Routes>
    </BrowserRouter>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <Link className="navbar-brand" to="/">Hotel Manager</Link>
      <div className="navbar-nav">
        <Link className="nav-link" to="/">Dashboard</Link>
        <Link className="nav-link" to="/rooms">Rooms</Link>
        <Link className="nav-link" to="/customers">Customers</Link>
        <Link className="nav-link" to="/bookings">Bookings</Link>
        <Link className="btn btn-outline-light ms-3" to="/book-room">Add Book Room</Link>
      </div>
    </nav>
  );
}

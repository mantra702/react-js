import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary px-4 py-2 shadow-sm">
    <div className="container-fluid">
      <span className="navbar-brand fw-bold fs-4">User Manager</span>
      <div className="d-flex gap-3">
        <Link className="nav-link text-white" to="/">Home</Link>
        <Link className="nav-link text-white" to="/add">Add-User</Link>
      </div>
    </div>
  </nav>
);

export default Navbar;

import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="bg-cyan-500 p-4 text-white flex justify-between">
    <div className="text-lg font-semibold">Navbar</div>
    <div className="space-x-4">
      <Link to="/add" className="hover:underline">Add</Link>
      <Link to="/view" className="hover:underline">View</Link>
    </div>
  </nav>
);

export default Navbar;

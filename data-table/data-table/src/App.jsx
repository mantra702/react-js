// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import FormPage from './FormPage';
import ViewPage from './ViewPage';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <nav className="navbar">
          <Link to="/" className='text-decoration-none'>Form page</Link>
          <Link to="/view"className='text-decoration-none'>View Users</Link>
        </nav>

        <Routes>
          <Route path="/" element={<FormPage />} />
          <Route path="/view" element={<ViewPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import AddUser from './pages/AddUser';
import ViewUsers from './pages/ViewUsers';
import EditUser from './pages/EditUser';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/view" />} />
        <Route path="/add" element={<AddUser />} />
        <Route path="/view" element={<ViewUsers />} />
        <Route path="/edit/:id" element={<EditUser />} />
      </Routes>
    </Router>
  );
}

export default App;

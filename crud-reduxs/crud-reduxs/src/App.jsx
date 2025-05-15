import { Routes, Route } from 'react-router'
import Home from './pages/Home';
import AddUser from './Pages/AddUser';
import EditUser from './Pages/EditUser';
import NavBar from './Componets/NavBar';

function App() {
  return <>

    <NavBar />

    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/addUser' element={<AddUser />} />
      <Route path='/edit' element={<EditUser />} />
    </Routes>
  </>
}

export default App;
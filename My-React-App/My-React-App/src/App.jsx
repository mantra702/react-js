import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Dashboard from "./Pages/Dashboard";
import CustomForm from "./Pages/CustomForm";
import EditForm from "./Pages/EditForm";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";

export default function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    onAuthStateChanged(auth, (userData) => {
      setUser(userData);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <>
        <div className="d-flex justify-content-center align-items-center vh-100">
          <img
            src="https://assets-v2.lottiefiles.com/a/91cc0ece-1150-11ee-b7cb-d3afb5c0c001/QNF78Uk4YE.gif"
            alt="Loading..."
            height={100}
          />
        </div>
      </>
    );
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={!user ? <Login /> : <Navigate to="/dashboard" />} />
          <Route path="/register" element={!user ? <Register /> : <Navigate to="/dashboard" />} />
          <Route path="/dashboard" element={user ? <Dashboard /> : <Navigate to="/" />} />
          <Route path="/add" element={user ? <CustomForm /> : <Navigate to="/" />} />
          <Route path="/edit" element={user ? <EditForm /> : <Navigate to="/" />} />
          <Route path="*" element={<Navigate to={user ? "/dashboard" : "/"} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
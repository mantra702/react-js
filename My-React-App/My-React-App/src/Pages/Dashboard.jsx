import React from "react";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router";

import { toast, ToastContainer } from "react-toastify";

export default function Dashboard() {
  const navigatar = useNavigate();
  const logOut = () => {
    signOut(auth)
      .then(() => {
        navigatar("/");
      })
      .catch((err) => {
        toast.error(err.code);
      });
  };
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Dashboard Page</h1>

      <button className="btn btn-info" onClick={logOut}>
        Log Out
      </button>

      <ToastContainer />
    </div>
  );
}
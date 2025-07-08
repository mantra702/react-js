import React, { useState } from "react";
import { Link } from "react-router";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Register.css";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({});

  const registerUser = (e) => {
    e.preventDefault();

    if (!email) {
      return setError({ email: "Please enter your email." });
    }

    if (!password) {
      return setError({ password: "Please enter your password." });
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        toast.success("Account created successfully!");
        setEmail("");
        setPassword("");
      })
      .catch((err) => {
        if (err.code === "auth/invalid-email") {
          toast.error("Invalid email format.");
        } else if (err.code === "auth/weak-password") {
          toast.error("Password must be at least 6 characters.");
        } else if (err.code === "auth/email-already-in-use") {
          toast.error("Email is already registered.");
        } else {
          toast.error("Something went wrong.");
        }
      });

    setError({});
  };

  return (
    <div className="register-page">
      <div className="register-card">
        <h2>Create Account</h2>
        <p className="subtitle">Sign up to get started 🚀</p>
        <form onSubmit={registerUser}>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              className={error.email ? "input error" : "input"}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="example@domain.com"
            />
            {error.email && <span className="error-text">{error.email}</span>}
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className={error.password ? "input error" : "input"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
            />
            {error.password && <span className="error-text">{error.password}</span>}
          </div>

          <button type="submit" className="btn-register">Register</button>

          <p className="redirect-text">
            Already have an account? <Link to="/">Sign in</Link>
          </p>
        </form>
      </div>
      <ToastContainer position="top-center" />
    </div>
  );
}

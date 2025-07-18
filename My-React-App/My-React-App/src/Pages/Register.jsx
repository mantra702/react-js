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
      setError({ email: "Email is required." });
      return;
    }
    if (!password) {
      setError({ password: "Password is required." });
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        toast.success("Registration successful!");
        setEmail("");
        setPassword("");
      })
      .catch((err) => {
        if (err.code === "auth/invalid-email") {
          toast.error("Invalid email address.");
        } else if (err.code === "auth/weak-password") {
          toast.error("Password must be at least 6 characters.");
        } else if (err.code === "auth/email-already-in-use") {
          toast.error("Email already in use.");
        } else {
          toast.error("Something went wrong.");
        }
      });
    setError({});
  };
return (
 <div className="register-wrapper">
   <div className="register-card">
     <h2>Sign Up</h2>
     <p className="subtitle">Create your new account</p>
     <form onSubmit={registerUser}>
       <div className="form-floating">
         <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required className={error.email ? "error" : ""} placeholder="Email" />
            <label>Email</label>
            {error.email && <small className="error-text">{error.email}</small>}
          </div>
          <div className="form-floating">
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required className={error.password ? "error" : ""} placeholder="Password" />
            <label>Password</label>
            {error.password && <small className="error-text">{error.password}</small>}
          </div>
          <button type="submit" className="btn-register">Register</button>
          <p className="login-prompt"> Already have an account? <Link to="/">Login</Link></p>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}

import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../firebase";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Login.css";
import googleIcon from "../public/images/google-icon.png"; // Ensure you have a valid path to the Google icon

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({});
  const navigate = useNavigate();

  const loginUser = (e) => {
    e.preventDefault();
    if (!email) return setError({ email: "Please enter email." });
    if (!password) return setError({ password: "Please enter password." });

    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        toast.success("Login successful!");
        setEmail("");
        setPassword("");
        navigate("/dashboard");
      })
      .catch((err) => {
        console.log(err.code);
        if (err.code === "auth/invalid-credential") {
          toast.error("Invalid credentials.");
        } else {
          toast.error("Login failed. Please try again.");
        }
      });

    setError({});
  };

  const loginWithGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then(() => {
        toast.success("Google login successful!");
        navigate("/dashboard");
      })
      .catch((err) => {
        console.log(err.code);
        toast.error(`Google login failed: ${err.code}`);
      });
  };

  return (
    <div className="login-page">
      <div className="login-box">
        <h2 className="login-title">Sign In</h2>
        <p className="login-subtitle">Welcome back 👋</p>
        <form onSubmit={loginUser}>
          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              value={email}
              className={error.email ? "input-error" : ""}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
            />
            {error.email && <span className="error">{error.email}</span>}
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              className={error.password ? "input-error" : ""}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
            />
            {error.password && <span className="error">{error.password}</span>}
          </div>

          <button className="btn-login" type="submit">Login</button>

          <div className="divider">or</div>

          <button className="btn-google" type="button" onClick={loginWithGoogle}>
            {/* <img src="https://logowik.com/content/uploads/images/985_google_g_icon.jpg" alt="google-icon" className="google-icon"  /> */}
            <img src={googleIcon} alt="google-icon" className="google-icon"  />
            Continue with Google
          </button>

          <p className="register-text">
            Don't have an account? <Link to="/register">Sign up</Link>
          </p>
        </form>
      </div>
      <ToastContainer position="top-center" />
    </div>
  );
}

import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router";
import {
  signInWithEmailAndPassword,
  signInWithRedirect,
  getRedirectResult,

  signInWithPopup
} from "firebase/auth";
import { auth, googleProvider } from "../firebase";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Login.css";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    getRedirectResult(auth)
      .then((result) => {
        if (result?.user) {
          toast.success("Google login successful!");
          navigate("/dashboard");
        }
      })
      .catch((err) => {
        toast.error("Google login failed: " + err.message);
      });
  }, []);
  const loginUser = (e) => {
    e.preventDefault();
    if (!email) {
      setError({ email: "Please enter email." });
      return;
    }
    if (!password) {
      setError({ password: "Please enter password." });
      return;
    }
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        toast.success("Login successful!");
        setEmail("");
        setPassword("");
        navigate("/dashboard");
      })
      .catch((err) => {
        if (err.code === "auth/invalid-credential") {
          toast.error("Invalid credentials.");
        } else if (err.code === "auth/invalid-email") {
          toast.error("Invalid email format.");
        } else if (err.code === "auth/wrong-password") {
          toast.error("Incorrect password.");
        } else {
          toast.error("Login failed. Try again.");
        }
      });
    setError({});
  };
    const loginWithGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((data) => {
        toast.success("User Login Successfully...");
        navigate("/dashboard");
      })
      .catch((err) => {
        console.log(err.code);

        toast.error(`Something went wrong... : ${err.code}`);
      });
  };
return (
 <div className="login-wrapper">
   <div className="login-card">
     <h2 className="title">Login</h2>
     <p className="subtitle">Access your account</p>
     <form onSubmit={loginUser} className="login-form">
       <div className="form-floating">
         <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required className={error.email ? "error" : ""} placeholder="Email" />
         <label>Email</label>
         {error.email && <small className="error-text">{error.email}</small>}
       </div>
       <div className="form-floating">
         <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required className={error.password ? "error" : ""} placeholder="Password" />
         <label>Password</label>
         {error.password && ( <small className="error-text">{error.password}</small> )}
       </div>
       <button type="submit" className="btn-primary"> Login </button>
       <p className="signup-text"> Don't have an account? <Link to="/register">Sign Up</Link></p>
     </form>
     <div className="divider">or</div>
       <button className="btn-google" onClick={loginWithGoogle}>
          <img src="https://img.icons8.com/color/20/google-logo.png" alt="Google" />
          Sign in with Google
        </button>
      </div>
      <ToastContainer />
    </div>
  );
}

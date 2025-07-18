import React, { use, useState } from "react";
import "./CustomForm.css";
import NavBar from "../Components/NavBar";
import { addDoc, collection } from "firebase/firestore"
import { db } from "../firebase";
import { toast, ToastContainer } from "react-toastify"

export default function CustomForm() {
  const [userData, setUserData] = useState({ fname: "", lname: "", email: "", password: "", hobbies: [], gender: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const doc = await addDoc(collection(db, "Users"), userData);

      if (doc.id) {
        toast.success("User registered successfully!");
        setUserData({ fname: "", lname: "", email: "", password: "", hobbies: [], gender: "" });
      } else {
        toast.error("Failed to register user. Please try again.");
      }
    } catch (e) {
      console.error("Error adding document: ", e);
      toast.error("An error occurred while registering the user.");
    }
  }
    return (
      <>
        <NavBar />
        <div className="form-wrapper">
          <form className="form-container" onSubmit={handleSubmit}>
            <h2 className="form-title">User Registration</h2>

            <div className="input-group">
              <input type="text" value={userData.fname} onChange={e => setUserData({ ...userData, fname: e.target.value })} required />
              <label>First Name</label>
            </div>

            <div className="input-group">
              <input type="text" value={userData.lname} onChange={e => setUserData({ ...userData, lname: e.target.value })} required />
              <label>Last Name</label>
            </div>

            <div className="input-group">
              <input type="email" value={userData.email} onChange={e => setUserData({ ...userData, email: e.target.value })} required />
              <label>Email</label>
            </div>

            <div className="input-group">
              <input type="password" value={userData.password} onChange={e => setUserData({ ...userData, password: e.target.value })} required />
              <label>Password</label>
            </div>

            <div className="checkbox-group">
              <label>Hobbies</label>
              <div className="checkbox-options">
                {["Learning", "Eating", "Running"].map((hobby) => (
                  <label key={hobby}>
                    <input type="checkbox" value={hobby} checked={userData.hobbies.includes(hobby)} onChange={(e) => {
                        const isChecked = e.target.checked;
                        setUserData((prevData) => ({
                          ...prevData,
                          hobbies: isChecked
                            ? [...prevData.hobbies, hobby]
                            : prevData.hobbies.filter((h) => h !== hobby),
                        }));
                      }} 
                    />
                    {hobby}
                  </label>
                ))}
              </div>
            </div>


            <div className="select-group">
              <label>Gender</label>
              <select required value={userData.gender} onChange={e => setUserData({ ...userData, gender: e.target.value })}>
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Others">Others</option>
              </select>
            </div>

            <button type="submit" className="submit-btn">Submit</button>
          </form>
           <ToastContainer />
        </div>
       
      </>
    );
  }

import React, { useEffect, useState } from "react";
import NavBar from "../Components/NavBar";
import "./Dashboard.css";
import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase";

export default function Dashboard() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchAllUser();
  })

  const fetchAllUser = async () => {
    const data = await getDocs(collection(db, "Users"));

    let userData = [];
    data.forEach((doc) => {
      userData.push( { id: doc.id, fname: doc.data().fname, lname: doc.data().lname, email: doc.data().email, password: doc.data().password, hobbies: doc.data().hobbies, gender: doc.data().gender })
    })

    setUsers(userData);
  }

  const handleEdit = (id) => {
    alert(`Edit user with ID: ${id}`);
  };

  const handleDelete = async(id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      const docRef = doc(db, "Users", id);
     await deleteDoc(docRef);
    }

    fetchAllUser();
  };

  return (
    <>
      <NavBar />
      <div className="dashboard-wrapper">
        <h2 className="dashboard-title">User Management</h2>
        <div className="table-container">
          <table className="user-table">
            <thead>
              <tr>
                <th>Sr.No</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Password</th>
                <th>Hobbies</th>
                <th>Gender</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.length > 0 ? (
                users.map((user, index) => (
                  <tr key={user.id}>
                    <td>{index + 1}</td>
                    <td>{user.fname}</td>
                    <td>{user.lname}</td>
                    <td>{user.email}</td>
                    <td>{user.password}</td>
                    <td>{user.hobbies}</td>
                    <td>{user.gender}</td>
                    <td>
                      <button className="btn edit-btn" onClick={() => handleEdit(user.id)}> Edit </button>
                      <button className="btn delete-btn" onClick={() => handleDelete(user.id)}> Delete </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" style={{ textAlign: "center" }}> No users found.  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

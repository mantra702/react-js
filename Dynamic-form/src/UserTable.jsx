import React from "react";
import "./UserTable.css";

const UserTable = ({ data }) => {
  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Grid</th>
            <th>Name</th>
            <th>Email</th>
            <th>Courses</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody className="bg-success">
          {data.map((user,index) => (
            <tr key={index}>
              <td>{user.grid}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.course.join(", ")}</td>
              <td>{user.city}</td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;

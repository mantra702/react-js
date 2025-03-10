import React from "react";
import UserTable from "./UserTable";
import "./App.css";
import NavBar from './navbar'


function App() {
  const data = [
    {
      grid: 1,
      name: "kishan",
      email: "kishan@gmail.com",
      password: "kishan@123",
      course: ["html", "css", "bootstrap", "js"],
      city: "surat",
    },
    {
      grid: 2,
      name: "jay",
      email: "jay@gmail.com",
      password: "kishan@123",
      course: ["photosho", "figma", "illustrator", "adobe xd"],
      city: "rajkot",
    },
    {
      grid: 3,
      name: "ajay",
      email: "ajay@gmail.com",
      password: "ajay@123",
      course: ["html", "css", "bootstrap", "nodejs"],
      city: "amareli",
    },
    {
      grid: 4,
      name: "nisha",
      email: "nisha@gmail.com",
      password: "nisha@123",
      course: ["html", "css", "bootstrap", "python", "js"],
      city: "vadodara",
    },
    {
      grid: 5,
      name: "meet",
      email: "meet@gmail.com",
      password: "meet@123",
      course: ["html", "css", "bootstrap", "python", "nodejs", "js"],
      city: "ankleswer",
    },{
      grid: 6,
      name: "patel keyu",
      email: "keyu.pa@gmail.com",
      password: "keyu@123",
      course: ["html", "css", "bootstrap", "figma", "illustrator", "adobe xd"],
      city: "kamrej",
    },
  ];

  return (
    <>
      <NavBar title="User Information" />
      <div className="App">
        <h1>User Information</h1>
        <UserTable data={data} />
      </div>
    </>
  );
}
export default App;


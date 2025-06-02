import React, { useContext } from "react";
import { countContext, nameContext, userInfoContext } from "../App";

export default function ChildC() {
  const name = useContext(nameContext);
  const count = useContext(countContext);
  const userInfo = useContext(userInfoContext);

  let array = [];

  for (let i = 1; i <= count; i++) {
    array.push(i);
  }

  return (
    <>
      <p>Child C Component</p>
      {array.map((value, index) => (
        <>
          <h2>
            Hello 👋 {name} {value}
          </h2>
        </>
      ))}
      <br />
      <br />
      <p>Name : {userInfo.name}</p>
      <p>Email : {userInfo.email}</p>
      <p>Password : {userInfo.password}</p>
    </>
  );
}
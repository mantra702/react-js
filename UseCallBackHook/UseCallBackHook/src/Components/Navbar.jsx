import { memo } from "react";

const NavBar = ({ name, myMethod }) => {
  console.log("This NavBar Component is running.....");

  return (
    <>
      <p>Hello {name}, How are you ??</p>
      <p>{myMethod()}</p>
    </>
  );
};

export default memo(NavBar);
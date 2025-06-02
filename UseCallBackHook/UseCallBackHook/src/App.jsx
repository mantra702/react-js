import { useCallback, useState } from "react";
import NavBar from "./Components/NavBar";
const App = () => {
const [count, setCount] = useState(0);
const [number, setNumber] = useState(0);
const myMethod = useCallback(() => {
    return "Hello World" + number;
  }, [number]);

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h1>useCallBack Hook</h1>

        <h2>Count : {count}</h2>
        <h2>Number : {number}</h2>

        <NavBar name={"Harsh"} myMethod={myMethod} />

        <button onClick={() => setCount(count + 1)}>+</button>
        <button onClick={() => setNumber(number + 1)} style={{marginLeft:"5px"}}>+ Number</button>
      </div>
    </>
  );
};

export default App;
import { useMemo, useState } from "react";

function App() {
  const [count, setCount] = useState(1);
  const [number, setNumber] = useState(99);
  const multiplication = useMemo(
    function mul() {
      console.log("This Function is Running...");
      return count * 10;
    },
    [count]
  );
  return (
    <>
      <h1 style={{textAlign: "center"}}>useMemo Hook</h1>
      <h2 style={{ textAlign: "center" }}>{multiplication}</h2>
      <div style={{ textAlign: "center" }}>
        <h2>Count : {count}</h2>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <h2>Number : {number}</h2>
        <button onClick={() => setNumber(number - 1)}>Decrement</button>
      </div>
    </>
  );
}

export default App;

// import { useMemo, useState } from "react";
// let numbers = []
// // numbers = [1,2,3,4,.......,10000000]
// for (let i = 1; i <= 10000000; i++) {
//   numbers.push(i);
// }
// function App() {
//   const [count, setCount] = useState(5600000);
//   const [myNumber, setMyNumber] = useState(numbers);
//   const currentNumber = useMemo(
//     () => myNumber.filter((data) => data == count),
//     [count]
//   );
//   return (
//     <>
//       <h1>useMemo Hook</h1>
//       <div style={{ textAlign: "center" }}>
//         <h2>Count : {currentNumber}</h2>
//         <h2>Count : {count}</h2>
//         <button onClick={() => setCount(count + 1)}>Increment</button>
//       </div>
//     </>
//   );
// }
// export default App;
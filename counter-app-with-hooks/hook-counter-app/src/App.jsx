import React, { useState, useEffect } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"

export default function App() {
  let [count, setCount] = useState(0);
  useEffect(() => {
    console.log("Mounting State");
    setTimeout(() => {
      setCount(count + 1)
    }, 2000)
    return function () {
      console.log("UnMouting State");
    }
  })
  useEffect(() => {
    console.log("Updating State");
  }, [count])
   const increse = () => {
    count++;
    setCount(count)
}

  const decrese = () => {
      if (count == 0)
      return false;
    count--;
    setCount(count)
}

  return <>
    <center>
      <h1>Counter App</h1>
      <br />
      <h2>{count}</h2>
      <br />
       <button className='btn btn-success ' onClick={increse}>➕</button>
      <button className='btn btn-danger ms-4' onClick={decrese}>➖</button>
    </center>
  </>
}
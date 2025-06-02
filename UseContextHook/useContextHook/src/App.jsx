import { createContext, useState } from "react";
import ChildA from "./Componets/ChildA";

/*

  useContext : 
    1. To create a new context
        - createContext() method
    2. Provider
    3. Consume state using useContext hook
*/

const nameContext = createContext();
const countContext = createContext();
const userInfoContext = createContext();

export default function App() {
  const [name, setName] = useState("meet");
  const [count, setCount] = useState(2);
  const [userInfo, setUserInfo] = useState({
    name: "Karan Patel",
    email: "karan@gmail.com",
    password: "123456",
  });
  return (
    <>
      <h1>App Component {name}</h1>

      <p>Count Value : {count}</p>

      <nameContext.Provider value={name}>
        <countContext.Provider value={count}>
          <userInfoContext.Provider value={userInfo}>
            <ChildA />
          </userInfoContext.Provider>
        </countContext.Provider>
      </nameContext.Provider>
    </>
  );
}

export { nameContext, countContext, userInfoContext };
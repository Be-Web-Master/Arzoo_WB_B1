import React from "react";
import { useState, createContext } from "react";
import { Comp1 } from "./contextFiles/Comp1";
import { UseReducerDemo } from "./useReducerDemo";
export const CountContext = createContext(0);
export const UseContextDemo = () => {
  const [count, setCount] = useState(0);
  return (
    <CountContext.Provider value={{ count }}>
      <div>
        {/* <button onClick={() => setCount(count + 1)}>+</button> */}
        {/* <Comp1 /> */}
        <UseReducerDemo/>
      </div>
    </CountContext.Provider>
  );
};

import React from "react";
import { Comp2 } from "./Comp2";
export const Comp1 = () => {
  {
    /* //  const {count1} = props
    //  console.log({count1}) */
  }
  console.log("Comp1");
  return (
    <div id="comp1">
      {/* <Comp2 count2 = {count1}/> */}
      <Comp2 />
    </div>
  );
};

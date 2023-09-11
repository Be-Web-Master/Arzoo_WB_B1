import React, { useContext } from "react";
import { CountContext } from "../useContextDemo";
export const Comp4 = () => {
  const { count } = useContext(CountContext);
  console.log({ count });
  {
    /* // const {count4} = props; */
  }
  return <div id="comp4">{count}</div>;
};

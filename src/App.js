import { useState } from "react";
import {InputForm} from "./InputForm";
import { DataList,dataArray } from "./DataList";
import { UseEffectComp } from "./UseEffect";
import { UseRefDemo } from "./UseRefDemo";
import { UseContextDemo } from "./useContextDemo";
import { ReduxDemo } from "./redux/reduxDemo";
const ReactComp = () => {
  return <ReduxDemo/>
    // return(<>
    //     {/* <UseRefDemo/> */}
    //     <UseContextDemo/>
    // </>);
  // const [count, setCount] = useState(0)
  // const increaseCount = ()=>{
  //     setCount(count+1);
  // }
  //  return (
  //   <>
  //     <UseEffectComp/>
  //   </>
  //  )
  // <div>
  // <button id="add" onClick={increaseCount}>+</button>

  // <span>Count : {count}</span>

  // <button id="subtract" onClick={()=>{setCount(count-1)}}>-</button>

  // <InputForm rcCount={count}>
  //   {count > 5 ? <Comp1 compCount={count*3000}/> : <Comp1 compCount={count*1000}/>}

  //   {count > 5 && <div>Hello from Div</div>}

  //   Not in div
  // </InputForm>
  //  {dataArray.map((obj,idx)=>{
  //    const {a, b} =obj;
  //    return <DataList order={idx+1} a={a} b={b} />
  //  })}
  // </div>;
}

// const Comp1 = (props)=>{
// const {compCount} = props;
// return <div>From Comp1: {compCount}</div>
// }
export default ReactComp;
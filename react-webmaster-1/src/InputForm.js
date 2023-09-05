import { useState } from "react";

const InputForm =(props) =>{
    const [inputValue, setInputValue] = useState('');
    let {rcCount,children} = props;
    console.log(children)
    // props are immutable
    console.log("3",{inputValue})
     return <form>
        <div>Count In Form: {rcCount}</div>
        {children}
      <input type="text" 
      onChange={(e)=>{
        console.log("1",{inputValue})
        setInputValue(e.target.value)
        console.log("2",{inputValue})
      }} 
      value={inputValue}
      />
      {console.log("4",{inputValue})}
      <div>{inputValue}</div>
      <input type="submit" />
     </form>
  }
export {InputForm};
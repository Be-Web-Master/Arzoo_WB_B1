import React, { useEffect } from "react";
import { useState, useRef } from "react";
export const UseRefDemo =()=>{
    const [toggle, setToggle] = useState(false);
    const countRef = useRef(0);

    console.log(countRef.current.innerText)
    useEffect(()=>{
        if(countRef.current){
          countRef.current.innerText = 0
        }
    },[])
    return(<>
        <button onClick={()=> {
            countRef.current.innerText= Number(countRef.current.innerText)+1;
            setToggle(!toggle)
        }}>+
        </button>
        <div  ref ={countRef}>
            {countRef.current.innerText}
        </div>
    </>);
}
import { useEffect, useState } from "react"

export const UseEffectComp =()=>{
    const [count, setCount] = useState({
      countX: 0,
      countY: 0,
      changes:[]
    })

    useEffect(()=>{
      console.log("called from effect.")
    // useEffect will definetly run at mounting also when no [] has passed.
    //if we pass 2nd arg-> []. useeffect will not re run hence no clg.
    // [] ma hum vo pass kre jo change ho that is well known by react, then too it will re run.
    },[count])
    console.log({count})
    return <div onClick={()=> setCount(count + 1)}>
        {count}
    </div>
}
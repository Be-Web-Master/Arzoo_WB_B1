import React, { useReducer } from 'react'

const reducer = (state, action)=>{
 switch(action){
    case 'plusOne':{
        state += 1;
        return state;
    }
    case 'plusHundred':{
        state += 100;
        return state;
    }
    case 'multiplyBy10':{
        state *= 10;
        return state;
    }
    case 'divideBy2': {
        state /=2 ;
        return Math.floor(state);
    }
    default : {
        return state;
    }
 }
}
const initialState = 0
export const UseReducerDemo = () => {
    const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div>
        <button onClick={()=>dispatch('plusOne')}>+</button>
        <button onClick={()=> dispatch('plusHundred')} >+100</button>
        <button onClick={()=>dispatch('multiplyBy10')}>x10</button>
        <button onClick={()=>dispatch('divideBy2')}>/2</button>
        {state}
    </div>
  )
}

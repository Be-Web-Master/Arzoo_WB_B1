import { counterActions } from "./slice"
import {useSelector, useDispatch} from "react-redux"
export const ReduxDemo = ()=>{
    console.log('first')
    const count = useSelector(state => {
        console.log({state})
        return state.counter.count;
    })
    const dispatch = useDispatch()
    const {incBy1} =counterActions;
  return <>
      <button onClick={()=>dispatch(incBy1())}>+</button>
      <div>{count}</div>
  </>
}
import {createSlice} from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {count:0},
    reducers:{
        incBy1 : (state,action)=>{
            state.count++;
            console.log({state,action})
            return state;
        }
    }
})

export const {actions: counterActions , reducer: counterReducer} = counterSlice
import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name:"counter", //good practise to name slice
  initialState:{
    value:0
  },
  reducers:{ //functions
    increment:(state)=>{ //accept the state
      state.value+=1;
    },
    decrement:(state)=>{
      state.value-=1;
    },
    incrementByAmount:(state,action)=>{
      state.value+=action.payload; //payload: value passed to the action
    },
    clear:(state)=>{
      state.value=0
    }
   }
})

export const {increment,decrement,incrementByAmount,clear} = counterSlice.actions;
export default counterSlice.reducer;
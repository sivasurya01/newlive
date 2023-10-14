import {createSlice } from "@reduxjs/toolkit";
const intialstatevalue = {bgcolor:''}
export const colorSlice = createSlice({
    name:'color',
    initialState: {value: intialstatevalue},
    reducers:{
        color:(state,action)=>{
      state.value.bgcolor = action.payload.bgcolor
        }
    }
})
export const {color} = colorSlice.actions
export default colorSlice.reducer
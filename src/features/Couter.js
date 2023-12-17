import { createSlice } from "@reduxjs/toolkit";
let value = { count: 0 };
export const CounterSlice = createSlice({
  name: "Counter",
  initialState: value,
  reducers: {
    increment: (state, action) => {
      console.log(state);
      console.log(action);
      //   state.action = action.payload;
      state.count += 1; // Update the value directly
    },
    decrement: (state) => {
      state.count -= 1;
    },
    reset: (state) => {
      state.count = 0;
    },
    incrementamout: (state, action) => {
      state.count *= action.payload;
      console.log(state);
    },
  },
});
export const { increment, decrement, reset, incrementamout } =
  CounterSlice.actions;
export default CounterSlice.reducer;

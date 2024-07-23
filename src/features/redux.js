import { createSlice } from "@reduxjs/toolkit";

export const reduxSlice = createSlice({
  name: "redux",
  initialState: { value: 0 },
  reducers: {
    add: (state, action) => {
      state.value = state.value + 1;
    },
  },
});
export default reduxSlice.reducer;
export const { add } = reduxSlice.actions;

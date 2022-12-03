import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  counter: 0,
};

export const testSlice = createSlice({
  name: "test",
  initialState,
  reducers: {
    increment: (state, action) => {
      state.counter = action.payload;
    },
  },
});

export const { increment } = testSlice.actions;

export default testSlice.reducer;

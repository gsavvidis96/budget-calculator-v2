import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  prefersDarkMode: false,
};

export const baseSlice = createSlice({
  name: "base",
  initialState,
  reducers: {
    togglePrefersDarkMode: (state, action) => {
      state.prefersDarkMode = action.payload.prefersDarkMode;

      if (action.payload.saveToLocalStorage) {
        localStorage.setItem(
          "prefersDarkMode",
          JSON.stringify(state.prefersDarkMode)
        );
      }
    },
  },
});

export const { togglePrefersDarkMode } = baseSlice.actions;

export default baseSlice.reducer;

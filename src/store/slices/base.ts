import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import type { RootState } from "../index";

interface BaseState {
  prefersDarkMode: boolean;
}

const initialState: BaseState = {
  prefersDarkMode: false,
};

export const baseSlice = createSlice({
  name: "base",
  initialState,
  reducers: {
    togglePrefersDarkMode: (
      state,
      action: PayloadAction<{
        prefersDarkMode: boolean;
        saveToLocalStorage?: boolean;
      }>
    ) => {
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

// Other code such as selectors can use the imported `RootState` type
// export const selectPrefersDarkMode = (state: RootState) => state.base.prefersDarkMode;

export default baseSlice.reducer;

import { configureStore } from "@reduxjs/toolkit";
import base from "./slices/base";

export const store = configureStore({
  reducer: {
    base,
  },
});

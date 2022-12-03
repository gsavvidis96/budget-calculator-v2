import { configureStore } from "@reduxjs/toolkit";
import test from "./slices/test";

export const store = configureStore({
  reducer: {
    test,
  },
});

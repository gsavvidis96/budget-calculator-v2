import { configureStore } from "@reduxjs/toolkit";
import base from "./slices/base";

export const store = configureStore({
  reducer: {
    base,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

import { configureStore } from "@reduxjs/toolkit";
import useReducer from "./userSlice.js";

export default configureStore({
  reducer: {
    user: useReducer,
  },
});

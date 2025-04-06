import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice.jsx";
const store = configureStore({
  reducer: {
    app: appSlice,
  }
})
export default store;

import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice.jsx";
import {cacheResults} from "./searchSlice.jsx"
const store = configureStore({
  reducer: {
    app: appSlice,
    cache: cacheResults, 
  }
})
export default store;

import { configureStore } from "@reduxjs/toolkit";
import mobileMenuReducer from "./slices/mobileMenuSlice";
const store = configureStore({
  reducer: {
    mobileMenu: mobileMenuReducer,
  },
});

export default store;

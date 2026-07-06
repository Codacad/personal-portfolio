import { createSlice } from "@reduxjs/toolkit";

const mobileMenuSlice = createSlice({
  name: "mobileMenu",
  initialState: {
    open: false,
  },
  reducers: {
    toggleMobileMenu(state) {
      state.open = !state.open;
    },
    closeMobileMenu(state) {
      state.open = false;
    },
  },
});

export const { closeMobileMenu, toggleMobileMenu } = mobileMenuSlice.actions;
export default mobileMenuSlice.reducer;

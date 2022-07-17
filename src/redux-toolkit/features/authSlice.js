import { createSlice } from "@reduxjs/toolkit";
import { onAuthStateChanged } from "firebase/auth";

const initialState = {
  auth: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth: (state, action) => {
      state.auth = action.payload;
    },
  },
});

export default authSlice.reducer;
export const { setAuth } = authSlice.actions;

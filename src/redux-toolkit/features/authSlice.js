import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  authStatus: localStorage.getItem("token") ? true : false,
  token: localStorage.getItem("token"),
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth: (state, action) => {
      state.authStatus = true;
      state.token = action.payload.uid;
      localStorage.setItem("token", action.payload.uid);
    },
    removeAuth: (state, action) => {
      state.authStatus = false;
      state.token = "";
      localStorage.removeItem("token");
    },
  },
});

export default authSlice.reducer;
export const { setAuth, removeAuth } = authSlice.actions;

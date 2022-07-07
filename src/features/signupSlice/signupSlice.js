import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getSignupUser = createAsyncThunk(
  "quiz/signup",
  async ({ firstName, lastName, email, password }) => {
    try {
      const res = await axios.post("/api/auth/signup", {
        firstName,
        lastName,
        email,
        password,
      });
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
);

const initialState = {
  userInfo: {},
};

const signupSlice = createSlice({
  name: "signup",
  initialState,
  extraReducers: {
    [getSignupUser.pending]: (state) => {
      console.log("state");
    },
    [getSignupUser.fulfilled]: (state, action) => {
      console.log(action.payload);
    },
    [getSignupUser.rejected]: (state) => {
      console.log(state);
    },
  },
});

export default signupSlice.reducer;

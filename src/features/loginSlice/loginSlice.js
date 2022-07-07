import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { useNavigate } from "react-router";

export const getUserLoggedIn = createAsyncThunk(
  "quiz/login",
  async ({ email, password }) => {
    try {
      const res = await axios.post("/api/auth/login", {
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

const loginSlice = createSlice({
  name: "login",
  initialState,
  extraReducers: {
    [getUserLoggedIn.pending]: (state) => {
      console.log("pending");
    },
    [getUserLoggedIn.fulfilled]: (state, action) => {
      localStorage.setItem(
        "USER_INFO",
        JSON.stringify({
          token: action.payload.encodedToken,
          email: action.payload.foundUser.email,
          knowledgeLevel: action.payload.foundUser.knowledgeLevel,
          quizTaken: action.payload.foundUser.quizTaken,
          totalScore: action.payload.foundUser.totalScore,
        })
      );
      state.userInfo = JSON.parse(localStorage.getItem("USER_INFO"));
    },
    [getUserLoggedIn.rejected]: (state) => {
      console.log(state);
    },
  },
});

export default loginSlice.reducer;

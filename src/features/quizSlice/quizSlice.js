import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getQuizData = createAsyncThunk("quiz/quizes", async () => {
  try {
    const res = await axios.get("/api/quizzes");
    return res.data;
  } catch (error) {
    console.log(error);
  }
});

const initialState = {
  quizes: [],
};

const quizSlice = createSlice({
  name: "quizes",
  initialState,
  extraReducers: {
    [getQuizData.pending]: (state) => {
      console.log("pending");
    },
    [getQuizData.fulfilled]: (state, action) => {
      state.quizes = action.payload.quizes;
    },
    [getQuizData.rejected]: (state) => {
      console.log("rejected");
    },
  },
});

export default quizSlice.reducer;

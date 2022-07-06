import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getQuestion = createAsyncThunk(
  "quiz/question",
  async ({ quizId, questionId }) => {
    try {
      const res = await axios.get(`/api/quizzes/${quizId}/${questionId}`);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
);

const initialState = {
  question: [],
};

const questionSlice = createSlice({
  name: "question",
  initialState,
  extraReducers: {
    [getQuestion.pending]: (state) => {
      console.log("pending");
    },
    [getQuestion.fulfilled]: (state, action) => {
      state.question = action.payload;
    },
    [getQuestion.rejected]: (state) => {
      console.log("rejected");
    },
  },
});

export default questionSlice.reducer;

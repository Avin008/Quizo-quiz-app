import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getSingleQuiz = createAsyncThunk("quiz/singleQuiz", async (id) => {
  try {
    const res = await axios.get(`/api/quizzes/${id}`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
});

const initialState = {
  singleQuiz: [],
  loading: true,
};

const singleQuizSlice = createSlice({
  name: "singleQuiz",
  initialState,
  reducers: {
    loadingFunc: (state) => {
      state.loading = true;
    },
  },
  extraReducers: {
    [getSingleQuiz.pending]: (state) => {
      state.loading = true;
    },
    [getSingleQuiz.fulfilled]: (state, action) => {
      state.singleQuiz = action.payload.quiz;
      state.loading = false;
    },
    [getSingleQuiz.rejected]: (state) => {
      console.log(state);
    },
  },
});

export default singleQuizSlice.reducer;
export const { loadingFunc } = singleQuizSlice.actions;

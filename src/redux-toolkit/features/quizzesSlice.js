import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";

export const getQuizzes = createAsyncThunk(
  "quiz/category/quizzes",
  async (categoryId) => {
    const collectionRef = collection(db, "quizzes");
    const q = query(collectionRef, where("id", "==", categoryId));
    const data = await getDocs(q);
    return data.docs.map((x) => x.data());
  }
);

const initialState = {
  quizzes: [],
  isLoading: true,
};

const quizzesSlice = createSlice({
  name: "quizzes",
  initialState,
  extraReducers: {
    [getQuizzes.pending]: (state) => {
      state.category = [];
      state.isLoading = true;
    },
    [getQuizzes.fulfilled]: (state, action) => {
      state.quizzes = [...action.payload];
      state.isLoading = false;
    },
    [getQuizzes.rejected]: (state, action) => {
      console.log("rejected");
    },
  },
});

export default quizzesSlice.reducer;

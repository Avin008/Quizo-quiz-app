import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";

export const getSingleQuiz = createAsyncThunk(
  "quiz/category/quizzes/quiz",
  async (id) => {
    const collectionRef = collection(db, "quizzes");
    const q = query(collectionRef, where("qid", "==", id));
    const data = await getDocs(q);
    return data.docs.map((x) => x.data());
  }
);

const initialState = {
  singleQuiz: [],
  isLoading: true,
};

const singleQuizSlice = createSlice({
  name: "quiz",
  initialState,
  extraReducers: {
    [getSingleQuiz.pending]: (state) => {
      state.singleQuiz = [];
      state.isLoading = true;
    },
    [getSingleQuiz.fulfilled]: (state, action) => {
      state.singleQuiz = [...action.payload][0];
      state.isLoading = false;
    },
    [getSingleQuiz.rejected]: (state, action) => {
      console.log("rejected");
    },
  },
});

export default singleQuizSlice.reducer;

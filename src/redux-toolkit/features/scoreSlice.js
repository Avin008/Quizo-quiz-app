import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getDoc, doc, loadBundle } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";

export const getScore = createAsyncThunk("quiz/score", async (uid) => {
  const docRef = doc(db, "users", uid);
  const res = await getDoc(docRef);
  return res.data();
});

const initialState = {
  coins: 0,
  score: 0,
  user: "",
  isLoading: true,
};

const scoreSlice = createSlice({
  name: "score",
  initialState,
  extraReducers: {
    [getScore.pending]: (state, action) => {
      state.score = 0;
      state.coins = 0;
      state.isLoading = true;
    },
    [getScore.fulfilled]: (state, action) => {
      state.score = action.payload.score;
      state.coins = action.payload.coins;
      state.user = action.payload.user;
      state.isLoading = false;
    },
    [getScore.pending]: (state, action) => {
      console.log("rejected");
    },
  },
});

export default scoreSlice.reducer;

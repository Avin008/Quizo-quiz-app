import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { collection, getDocs, loadBundle } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";

export const getLeaderboard = createAsyncThunk("quiz/leaderboard", async () => {
  const colRef = collection(db, "users");
  const res = await getDocs(colRef);
  return res.docs.map((x) => x.data());
});

const initialState = {
  leaderboard: [],
};

const leaderboardSlice = createSlice({
  name: "leaderboard",
  initialState,
  extraReducers: {
    [getLeaderboard.pending]: (state, action) => {
      state.leaderboard = [];
    },
    [getLeaderboard.fulfilled]: (state, action) => {
      state.leaderboard = [...action.payload].sort((a, b) => b.score - a.score);
    },
    [getLeaderboard.rejected]: (state, action) => {
      console.log("rejected");
    },
  },
});

export default leaderboardSlice.reducer;

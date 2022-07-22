import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";

export const getCategoryData = createAsyncThunk("quiz/category", async () => {
  const collectionRef = collection(db, "category");
  const result = await getDocs(collectionRef);
  return result.docs.map((x) => x.data());
});

const initialState = {
  category: [],
  isLoading: true,
};

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    resetLoading: (state) => {
      state.isLoading = true;
    },
  },
  extraReducers: {
    [getCategoryData.pending]: (state, action) => {
      state.category = [];
      state.isLoading = true;
    },
    [getCategoryData.fulfilled]: (state, action) => {
      state.category = [...action.payload];
      state.isLoading = false;
    },
    [getCategoryData.rejected]: (state, action) => {
      console.log("rejected");
    },
  },
});

export default categorySlice.reducer;
export const { resetLoading } = categorySlice.actions;

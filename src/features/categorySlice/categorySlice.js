import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { data } from "../../data";

const initialState = {
  category: [],
};

export const getCategoryData = createAsyncThunk("quiz/category", async () => {
  try {
    const res = await axios.get("/api/categories");
    return res.data;
  } catch (error) {
    console.log(data);
  }
});

const categorySlice = createSlice({
  name: "category",
  initialState,
  extraReducers: {
    [getCategoryData.pending]: (state) => {
      console.log("pending");
    },
    [getCategoryData.fulfilled]: (state, action) => {
      state.category = action.payload.categories;
    },
    [getCategoryData.rejected]: (state) => {
      console.log("rejected");
    },
  },
});

export default categorySlice.reducer;

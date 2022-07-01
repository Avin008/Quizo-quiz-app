import { createSlice } from "@reduxjs/toolkit";

type InitialState = {
    darkMode: boolean
}

const initialState : InitialState = {
    darkMode: false
}

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        toggleTheme: (state) => {
            state.darkMode = !state.darkMode
        }
    }
})

export const {toggleTheme} = themeSlice.actions 
export default themeSlice.reducer
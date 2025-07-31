import { createSlice } from "@reduxjs/toolkit";

const initialState = { mode: 'light'};

export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        toggleTheme(state, action) {
            state.mode = state.mode === 'light' ? 'dark' : 'light'
        }
    }
});

export const themeAction = themeSlice.actions;
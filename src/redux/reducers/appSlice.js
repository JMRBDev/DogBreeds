import { createSlice } from '@reduxjs/toolkit';

import * as APP_STATES from 'enums/APP_STATES';

export const appSlice = createSlice({
    name: 'app',
    initialState: {
        preferences: {
            theme: window.localStorage.getItem('theme') || 'light',
        },
        currentState: APP_STATES.READY,
        currentError: undefined,
    },
    reducers: {
        toggleTheme: (state) => {
            state.preferences.theme = state.preferences.theme === 'light' ? 'dark' : 'light';
            window.localStorage.setItem('theme', state.preferences.theme);
        },
        setCurrentState: (state, action) => {
            state.currentState = action.payload;
        },
        setCurrentError: (state, action) => {
            state.currentError = action.payload;
        },
        deleteError: (state) => {
            state.currentState = APP_STATES.READY;
            state.currentError = undefined;
        }
    },
});

export const { toggleTheme, setCurrentState, setCurrentError, deleteError } = appSlice.actions;

export default appSlice.reducer;
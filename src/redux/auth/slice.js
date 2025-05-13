import { createSlice } from "@reduxjs/toolkit";
import { loginThunk, logoutThunk, refreshThunk, registerThunk } from "./operations";

const initialState = {
    user: {
    email: null,
    name: null,
    },
    token: null,
    isLoggedIn: false,
};

const slice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: builder =>{
        builder.addCase(registerThunk.fulfilled, (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
        })
        .addCase(loginThunk.fulfilled, (state, action) =>{
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
        })
        .addCase(logoutThunk.fulfilled, () => initialState)
        .addCase(refreshThunk.fulfilled, (state, action) => {
            state.isLoggedIn = true;
            state.user = action.payload;
        });
    }
})

export const authReducer = slice.reducer;
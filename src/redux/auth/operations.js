import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";



export const goItAPI = axios.create({
    baseURL: "https://connections-api.goit.global/",
});

const setAuthHeader = token => {
    goItAPI.defaults.headers.common.Authorization = `Bearer ${token}`;
}

const removeAuthHeader = () => {
    goItAPI.defaults.headers.common.Authorization = '';
}   

export const registerThunk = createAsyncThunk('auth/register', async (body, thunkAPI) => {
    try {
        const response = await goItAPI.post('/users/signup', body);
        setAuthHeader(response.data.token);
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const loginThunk = createAsyncThunk('auth/login', async (body, thunkAPI) => {
    try {
        const response = await goItAPI.post('/users/login', body);
        setAuthHeader(response.data.token);
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const logoutThunk = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
    try {
        await goItAPI.post('/users/logout');
        removeAuthHeader();
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const refreshThunk = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
    try {
        const savedToken = thunkAPI.getState().auth.token;
        if (!savedToken){
            return thunkAPI.rejectWithValue('No valid token');
        }
        setAuthHeader(savedToken);
        const response = await goItAPI.get('/users/current');
        console.log(response.data);
        return response.data;
    }catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});
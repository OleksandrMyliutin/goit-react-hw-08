import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { goItAPI } from '../auth/operations';


export const fetchDataThunk = createAsyncThunk('fetchContacts', async (_, thunkAPI) => {
    try {
        const response = await goItAPI.get('/contacts');
        return response.data;
    } catch (error) {
        console.log(error);
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const deleteContactThunk = createAsyncThunk('deleteContact', async (id, thunkAPI) => {
    try{
        await goItAPI.delete(`/contacts/${id}`);
        return id;
    } catch (error) {
        console.log(error);
        return thunkAPI.rejectWithValue(error.message);
    }
})

export const addContactThunk = createAsyncThunk('addContact', async (body, thunkAPI) => {
    try{
        const response = await goItAPI.post('/contacts', body)
        return response.data;
    }catch (error) {
        console.log(error);
        return thunkAPI.rejectWithValue(error.message);
    }
});


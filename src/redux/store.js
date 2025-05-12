import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { contactsReducer } from './contactsSlice';
import { filtersReducer } from './filtersSlice';
import { optionReducer } from './optionSlice';
import { authReducer } from './auth/slice';


const rootReducer = combineReducers({
    contacts:  contactsReducer,
    filters: filtersReducer,
    option: optionReducer,
    auth: authReducer,
});

export const store = configureStore({
    reducer: rootReducer,
});


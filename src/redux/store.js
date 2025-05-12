import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { contactsReducer } from './contacts/contactsSlice';
import { filtersReducer } from './filters/filtersSlice';
import { optionReducer } from './filters/optionSlice';
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


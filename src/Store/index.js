import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authReducer';
import sendmailReducer from './sendmailReducer';
import modalReducer from './modalReducer';

const store=configureStore({
    reducer: {auth:authReducer,sendmail:sendmailReducer,modal:modalReducer},
});


export default store;
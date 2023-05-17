import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authReducer';
<<<<<<< HEAD
import sendmailReducer from './sendmailReducer';
import modalReducer from './modalReducer';

const store=configureStore({
    reducer: {auth:authReducer,sendmail:sendmailReducer,modal:modalReducer},
=======
import expenseReducer from './expenseReducer';
import cartReducer from './cartReducer';
import uiReducer from './uiReducer';

const store=configureStore({
    reducer: {auth:authReducer,expense:expenseReducer,cart:cartReducer,ui:uiReducer},
>>>>>>> b706e9927a4d058e3f39cef85c146b35266b6277
});


export default store;
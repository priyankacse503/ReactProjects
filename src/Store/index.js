import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authReducer';
import expenseReducer from './expenseReducer';
import cartReducer from './cartReducer';
import uiReducer from './uiReducer';

const store=configureStore({
    reducer: {auth:authReducer,expense:expenseReducer,cart:cartReducer,ui:uiReducer},
});


export default store;
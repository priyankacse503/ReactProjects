import { createSlice } from "@reduxjs/toolkit";

const uiSlice=createSlice({
    name:'ui',
    initialState:{cartIsVisible:false,cartnotification: null,expensenotification: null},
    reducers:{
        toggle(state){
            state.cartIsVisible=!state.cartIsVisible;
        },
        showCart(state) {
            state.cartIsVisible = true;
        },
        hideCart(state) {
            state.cartIsVisible = false;
        },
        showCartNotification(state,action){
            state.cartnotification={
                status: action.payload.status,
                title:action.payload.title,
                message:action.payload.message
            }
        },
        showExpenseNotification(state,action){
            state.expensenotification={
                status: action.payload.status,
                title:action.payload.title,
                message:action.payload.message
            }
        }
    }
})

export const uiActions=uiSlice.actions;

export default uiSlice.reducer;
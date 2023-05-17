import { createSlice } from '@reduxjs/toolkit';

const initialcartState = {
    addCart: [],
    totalAmount: 0,
    totalQuantity: 0,
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialcartState,
    reducers: {
        replaceCart(state,action) {
            state.addCart = action.payload.addCart;
            state.totalAmount = +action.payload.totalAmount;
            state.totalQuantity = +action.payload.totalQuantity;   
        },
        addToCart(state, action) {
            const newExpense = action.payload;
            const existingExpense = state.addCart.find(expense => expense.category === newExpense.category);
            state.totalQuantity++;
            // state.totalAmount = +state.totalAmount + (+newExpense.amount) * (newExpense.quantity);
            state.totalAmount = +(+state.totalAmount) + (+newExpense.amount);
            if (!existingExpense) {
                state.addCart.push({
                    amount: newExpense.amount,
                    description: newExpense.description,
                    category: newExpense.category,
                    quantity: 1,
                    totalExpenses: +newExpense.amount,
                })

            }
            else {
                existingExpense.quantity++;
                existingExpense.totalExpenses = +(+existingExpense.totalExpenses) + (+newExpense.amount);
            }
        },
        removeFromCart(state, action) {

            const newExpense = action.payload;
            const existingExpense = state.addCart.find(expense => expense.category === newExpense);
            state.totalAmount = +(+state.totalAmount) - (+existingExpense.amount);
            state.totalQuantity--;
            if (existingExpense.quantity === 1) {
                state.addCart = state.addCart.filter(item => item.category !== newExpense)

            } else {
                existingExpense.quantity--;
                existingExpense.totalExpenses = +(+existingExpense.totalExpenses) - (+existingExpense.amount);
            }
        }
    }
});

export const cartactions = cartSlice.actions;
export default cartSlice.reducer;
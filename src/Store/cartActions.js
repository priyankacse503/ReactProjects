import { cartactions } from './cartReducer';
import { expenseactions } from './expenseReducer';
import { uiActions } from './uiReducer';

export const fetchCartData = () => {
    return async (dispatch) => {
        const fetchData = async () => {
            const response = await fetch('https://expensetracker-11ae7-default-rtdb.firebaseio.com/cart.json');
            if (!response.ok) {
                throw new Error('Could not fetch Data');
            }
            const data = await response.json();
            return data;
        };
        try {
            const cartData = await fetchData();
            console.log("cartData:" + cartData);
            dispatch(cartactions.replaceCart({
                addCart: cartData.addCart || [],
                totalAmount: cartData.totalAmount,
                totalQuantity: cartData.totalQuantity,
            }
            ));

        } catch (error) {
            dispatch(
                uiActions.showCartNotification({
                    status: 'error',
                    title: 'Error!...',
                    message: 'Fetching Cart data Failed',
                }));
        }
    }
}

export const sendCartData = (cart) => {
    return async (dispatch) => {
        dispatch(
            uiActions.showCartNotification({
                status: 'pending',
                title: 'Sending...',
                message: 'Sending Cart data!',
            }));

        const sendRequest = async () => {
            const response = await fetch(`https://expensetracker-11ae7-default-rtdb.firebaseio.com/cart.json`, {
                method: 'PUT',
                body: JSON.stringify({
                    addCart: cart.addCart,
                    totalAmount: cart.totalAmount,
                    totalQuantity: cart.totalQuantity,
                }),
            });
            if (!response.ok) {
                throw new Error('Sending cart Data Failed.');
            }
        }
        try {
            await sendRequest();
            dispatch(
                uiActions.showCartNotification({
                    status: 'success',
                    title: 'Success!',
                    message: 'Sent Cart data Successfully',
                }));
        } catch (error) {
            dispatch(
                uiActions.showCartNotification({
                    status: 'error',
                    title: 'Error!...',
                    message: 'Sent Cart data Failed',
                }));
        }
    };
}

export const fetchExpenseData = () => {
    return async (dispatch) => {
        const fetchData = async () => {
            const response = await fetch('https://expensetracker-11ae7-default-rtdb.firebaseio.com/expenses.json');
            if (!response.ok) {
                throw new Error('Could not fetch Expense Data');
            }
            const data = await response.json();
            return data;
        };
        try {
            const expenseData = await fetchData();
            console.log("ExpenseData:" + expenseData);
            dispatch(expenseactions.replaceExpense({
                products: expenseData.products || [],
                totalExpenses: expenseData.totalExpenses,
                darkThemeEnabled: expenseData.darkThemeEnabled,
            }
            ));

        } catch (error) {
            dispatch(
                uiActions.showExpenseNotification({
                    status: 'error',
                    title: 'Error!...',
                    message: 'Fetching Expense data Failed',
                }));
        }
    }
}

export const sendExpenseData = (expense) => {
    return async (dispatch) => {
        dispatch(
            uiActions.showExpenseNotification({
                status: 'pending',
                title: 'Sending...',
                message: 'Sending Expense data!',
            }));

        const sendRequest = async () => {
            const response = await fetch(`https://expensetracker-11ae7-default-rtdb.firebaseio.com/expenses.json`, {
                method: 'PUT',
                body: JSON.stringify({
                    products: expense.products,
                    totalExpenses: expense.totalExpenses,
                    darkThemeEnabled: expense.darkThemeEnabled,

                }),
            });
            if (!response.ok) {
                throw new Error('Sending Expense Data Failed.');
            }
        }
        try {
            await sendRequest();
            dispatch(
                uiActions.showExpenseNotification({
                    status: 'success',
                    title: 'Success!',
                    message: 'Sent Expense data Successfully',
                }));
        } catch (error) {
            dispatch(
                uiActions.showExpenseNotification({
                    status: 'error',
                    title: 'Error!...',
                    message: 'Sent Expense data Failed',
                }));
        }
    };
}



import { createSlice } from '@reduxjs/toolkit';

const initialAuthState = { token: '', email: '', isLoggedIn: false }

const authSlice = createSlice({

    name: 'authentication',
    initialState: initialAuthState,
    reducers: {
        login(state, action) {
            state.isLoggedIn = true
            state.token = action.payload.token
            state.email = action.payload.email
            //state.email = 'hello@gmail.com'
            localStorage.setItem('dataKey', JSON.stringify(state.token));
            localStorage.setItem('email', JSON.stringify(state.email));
            setTimeout(()=>{
                localStorage.removeItem('dataKey');
                localStorage.removeItem('email');
            },500000);
        },
        logout(state) {
            state.isLoggedIn = false;
            localStorage.removeItem('dataKey');
            localStorage.removeItem('email');
        },

    }
});
export const authactions = authSlice.actions;

export default authSlice.reducer;
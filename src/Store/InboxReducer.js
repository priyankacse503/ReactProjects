import { createSlice } from '@reduxjs/toolkit';

const initialinboxState = {
    initMessages: [], 
}

const inboxSlice = createSlice({
    name: 'inbox',
    initialState: initialinboxState,
    reducers: {
        replaceCart(state,action) {
            state.initMessages = action.payload.initMessages;          
        },
        markRead(state,action){

        },
        doShow(state,action){
            const newInboxEmail = action.payload;
                state.initMessages.push({
                    email: newInboxEmail.email,
                    subject: newInboxEmail.subject,
                    body: newInboxEmail.body,
                })

        },
        doDelete(state,action){

        },
        toggleMark(state,action){

        },
        toggleMarkAll(state,action){

        },
        deleteMarked(state,action){

        },
        refreshMessages(state,action){

        },
        deleteMessages(state,action){

        },
       
    }
});

export const inboxactions = inboxSlice.actions;
export default inboxSlice.reducer;
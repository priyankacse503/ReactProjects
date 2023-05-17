import { createSlice } from '@reduxjs/toolkit';

const initialsendmailState = {
    sendmail: [],
    selected: {},
    deleted: 0,
}

const sendmailSlice = createSlice({
    name: 'sendmail',
    initialState: initialsendmailState,
    reducers: {
        replaceCart(state, action) {
            state.sendmail = action.payload.sendmail;
            state.selected = action.payload.selected;
            state.deleted = +action.payload.deleted;

        },
        sendmail(state, action) {
            const newEmail = action.payload;
            state.sendmail.push({
                email: newEmail.email,
                subject: newEmail.subject,
                body: newEmail.body,
                read: false,
            })
        },
        doShow(state, action) {
            state.sendmail[action.payload].email=state.sendmail[action.payload].email;
            state.sendmail[action.payload].subject=state.sendmail[action.payload].subject;
            state.sendmail[action.payload].body=state.sendmail[action.payload].body;
            state.sendmail[action.payload].read=true;

            state.selected.email=state.sendmail[action.payload].email;
            state.selected.subject=state.sendmail[action.payload].subject;
            state.selected.body=state.sendmail[action.payload].body;
            state.selected.read=true;
        },
        deletemail(state,action){
            const deleteEmail=action.payload;
            state.sendmail = state.sendmail.filter(item => item.email !== deleteEmail)
                    
            state.deleted=+(+state.deleted)+(1);
        },

    }
});

export const sendmailactions = sendmailSlice.actions;
export default sendmailSlice.reducer;

/*doShow(state, action) {
           
            state.selected.email=state.sendmail[action.payload].email;
            state.selected.subject=state.sendmail[action.payload].subject;
            state.selected.body=state.sendmail[action.payload].body;
            state.selected.read=true;
        },*/
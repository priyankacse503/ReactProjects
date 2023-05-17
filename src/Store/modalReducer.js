import { createSlice } from '@reduxjs/toolkit';

const initialModalState = { isModalVisible: false }

const modalSlice = createSlice({

    name: 'modal',
    initialState: initialModalState,
    reducers: {
        showModal(state) {
            state.isModalVisible = true      
        },
        hideModal(state) {
            state.isModalVisible = false;
        },

    }
});
export const modalactions = modalSlice.actions;

export default modalSlice.reducer;
import { createSlice } from '@reduxjs/toolkit';
import { IInitialState } from '../interfaces/types';

const initialState: IInitialState = {
    socketChat: undefined,
};

const mainSlice = createSlice({
    name: 'main',
    initialState,
    reducers: {
        setSocketChat(state, action) {
            return { ...state, socketChat: action.payload };
        },
    },
});

export const getSocket = (state: IInitialState) => state.socketChat;
export const { setSocketChat } = mainSlice.actions;

export default mainSlice.reducer;

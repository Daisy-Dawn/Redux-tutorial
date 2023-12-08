import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 0,
    showInput: false,
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.count += 1;
        },
        decrement: (state) => {
            state.count -= 1;
        },
        reset: (state) => {
            state.count = 0;
            state.showInput = false;
        },
        incrementByAmount: (state, action) => {
            state.count += action.payload;
        },
        showTheInput: (state) => {
            state.showInput = !state.showInput;
        },
    }
})

export const {increment, decrement, reset, incrementByAmount, showTheInput} = counterSlice.actions;
export default counterSlice.reducer;
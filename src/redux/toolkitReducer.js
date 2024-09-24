import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        number: 1
    },
    reducers: {
        add: (state) => { state.number += 1 },
        sub: (state) => { state.number -= 1 },
        reset: (state) => { state.number = 1 },
    },
})
export const { add, sub, reset } = counterSlice.actions
export default counterSlice.reducer;

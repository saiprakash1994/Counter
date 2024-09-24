import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        todos: []
    },
    reducers: {
        addtod: (state, action) => {
            state.todos.push(action.payload);
        },
        updateTod: (state, action) => {
            const { id, text } = action.payload;
            state.todos = state.todos.map(e => e.id === id ? { ...e, text: text } : e);

        },
        deleteTod: (state, action) => {
            const id = action.payload;
            state.todos = state.todos.filter(e => e.id !== id);
        },
        completeTod: (state, action) => {
            const id = action.payload;
            state.todos = state.todos.map(e => e.id === id ? { ...e, complete: !e.complete } : e);

        }
    }
});

export const { addtod, updateTod, deleteTod, completeTod } = todoSlice.actions;
export default todoSlice.reducer;

const ADD_TODO = 'ADD_TODO'
const UPDATE_TODO = 'UPDATE_TODO'
const DELETE_TODO = 'DELETE_TODO'
const COMPLETE_TODO = 'COMPLETE_TODO'

const initialState = {
    todos: []
}
export const onAdd = (todo) => ({
    type: ADD_TODO,
    payload: todo
})

export const onUpdate = (updateTodo) => ({
    type: UPDATE_TODO,
    payload: updateTodo
})
export const onDelete = (id) => ({
    type: DELETE_TODO,
    payload: id
})
export const onComplete = (id) => ({
    type: COMPLETE_TODO,
    payload: id
})

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state, todos: [...state.todos, action.payload]
            }
        case DELETE_TODO:
            return {
                ...state, todos: state.todos.filter((e) => e.id !== action.payload)
            }
        case UPDATE_TODO:
            return {
                ...state, todos: state.todos.map((e) => e.id === action.payload.id ? { ...e, text: action.payload.text } : e)
            }
        case COMPLETE_TODO:
            return {
                ...state, todos: state.todos.map((e) => e.id === action.payload ? { ...e, complete: !e.complete } : e)
            }
        default:
            return state
    }
}
export default reducer


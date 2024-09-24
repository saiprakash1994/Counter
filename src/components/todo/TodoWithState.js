import React, { useState } from 'react'

const TodoWithState = () => {
    const [newTodo, setNewTodo] = useState('')
    const [todos, setTodos] = useState([])
    const [editId, setEditId] = useState(null)
    const addTodo = () => {
        if (editId) {
            setTodos(todos.map((e) => (e.id == editId ?
                { ...e, text: newTodo } : e)))
            setEditId(null)
        } else {
            setTodos([...todos, { text: newTodo, id: Date.now(), complete: false }])

        }
        setNewTodo('')

    }
    const updateTodo = (id) => {
        const data = todos.find((e) => e.id == id)
        setEditId(data.id)
        setNewTodo(data.text)

    }
    const deleteTodo = (id) => {
        setTodos(todos.filter((e) => e.id !== id))

    }
    const completeTodo = (id) => {
        setTodos(todos.map((e) => e.id === id ? { ...e, complete: !e.complete } : e))

    }
    console.log(todos)
    return (
        <div>
            <h1>TodoWithState</h1>
            <input value={newTodo} type='text' onChange={(e) => { setNewTodo(e.target.value) }}></input>
            <button type='button' onClick={() => { addTodo() }}>{editId ? 'UPDATE' : 'ADD'}</button>
            {!editId ?
                <ul style={{}}>
                    {todos.map((e) => (
                        <li key={e.id} >
                            <span className={e.complete ? 'completed' : ''}
                                onClick={() => { completeTodo(e.id) }}>{e.text}</span>
                            <div>
                                <button type='button' onClick={() => { updateTodo(e.id) }}>Update</button>
                                <button type='button' className='delete'
                                    onClick={() => { deleteTodo(e.id) }}>Delete</button>
                            </div>
                        </li>
                    ))}
                </ul>
                : ''}
        </div>
    )
}

export default TodoWithState
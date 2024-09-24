import React, { useState } from 'react'


const Todo = () => {
    const [newTodo, setNewTodo] = useState('');
    const [todos, setTodos] = useState([]);
    const todoSave = () => {
        setTodos([...todos, { text: newTodo, complete: false, id: Date.now() }]);
        setNewTodo('')
    };
    const todoDelete = (id) => {
        setTodos(todos.filter((e) => (
            e.id !== id
        )))

    };
    const todoComplete = (id) => {
        setTodos(todos.map((e) => (
            e.id === id ? { ...e, complete: !e.complete } : e
        )))

    };

    return (
        <div>
            <h1>Todo</h1>
            <input type='text' value={newTodo} onChange={(e) => { setNewTodo(e.target.value) }}></input>
            <button type='button' onClick={() => { todoSave() }}>ADD</button>
            <ul style={{ listStyleType: 'none' }}>
                {todos.map((e) => (
                    <li style={{ textDecoration: e.complete == true ? 'line-through' : 'none' }}>
                        <span onClick={() => { todoComplete(e.id) }}>{e.text}</span>
                        <button style={{ marginLeft: '10px' }} type='button' onClick={() => { todoDelete(e.id) }}>delete</button>
                    </li>
                ))}
            </ul>

        </div>
    )
}

export default Todo
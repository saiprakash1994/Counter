import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { onAdd, onComplete, onDelete, onUpdate } from '../redux/redux';
const TodoWithRedux = () => {
    const dispatch = useDispatch();
    const todos = useSelector((state) => state.todos)
    const [newTodo, setTodo] = useState('')
    const [editId, setEditId] = useState(null)
    console.log(todos)
    const addTodo = () => {
        if (editId) {
            dispatch(onUpdate({ id: editId, text: newTodo }))
            setEditId(null)
        } else {
            dispatch(onAdd({ text: newTodo, complete: false, id: Date.now() }));
        }
        setTodo('')
    }
    const updateTodo = (id) => {
        const data = todos.find((e) => e.id == id)
        setEditId(data.id)
        setTodo(data.text)

    }
    const completeTodo = (id) => {
        dispatch(onComplete(id))

    }
    const deleteTodo = (id) => {
        dispatch(onDelete(id))
    }
    return (
        <div>
            <h1>TodoWithRedux</h1>
            <input type='text' value={newTodo} onChange={(e) => setTodo(e.target.value)}></input>
            <button type='button' onClick={() => { addTodo() }}>{editId ? 'UPDATE' : 'ADD'}</button>
            {!editId ? <ul style={{ listStyleType: 'none' }}>
                {todos.map((e) => (
                    <li key={e.id} style={{ textDecoration: e.complete === true ? 'line-through' : 'none' }}>
                        <span onClick={() => { completeTodo(e.id) }}>{e.text}</span>
                        <button style={{ marginLeft: '10px' }} type='button' onClick={() => { deleteTodo(e.id) }}>Delete</button>
                        <button style={{ marginLeft: '10px' }} onClick={() => { updateTodo(e.id) }}>Update</button>
                    </li>
                ))}
            </ul> : ''}
        </div>
    )
}

export default TodoWithRedux
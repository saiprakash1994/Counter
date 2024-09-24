import React, { useState } from 'react';
import './Todo.css';
import { useDispatch, useSelector } from 'react-redux';
import { addtod, completeTod, deleteTod, updateTod } from '../redux/tookit';

const TodoWithToolkit = () => {
    const todos1 = useSelector((state) => state.todos.todos);
    const dispatch = useDispatch();
    const [newTodo, setNewTodo] = useState('');
    const [editId, setEditId] = useState(null);

    const addTodo = () => {
        if (editId) {
            dispatch(updateTod({ id: editId, text: newTodo }));
            setEditId(null);
        } else {
            dispatch(addtod({ id: Date.now(), complete: false, text: newTodo }));
        }
        setNewTodo('');
    };

    const updateTodo = (id) => {
        const data = todos1.find((e) => e.id === id);
        setNewTodo(data.text);
        setEditId(id);
    };

    const completeTodo = (id) => {
        dispatch(completeTod(id));
    };

    const deleteTodo = (id) => {
        dispatch(deleteTod(id));
    };

    return (
        <div>
            <h1>Todo</h1>
            <input
                value={newTodo}
                type='text'
                onChange={(e) => setNewTodo(e.target.value)}
            />
            <button type='button' onClick={addTodo}>
                {editId ? "Update" : "ADD"}
            </button>
            <ul>
                {todos1.map((e) => (
                    <li key={e.id}>
                        <span
                            className={e.complete ? 'completed' : ''}
                            onClick={() => completeTodo(e.id)}
                        >
                            {e.text}
                        </span>
                        <div>
                            <button type='button' onClick={() => updateTodo(e.id)}>
                                Update
                            </button>
                            <button
                                type='button'
                                className='delete'
                                onClick={() => deleteTodo(e.id)}
                            >
                                Delete
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoWithToolkit;

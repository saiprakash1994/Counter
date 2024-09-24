import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { onAdd, onSub, onReset } from '../redux/reduxReducer'

const CounterByRedux = () => {
    const dispatch = useDispatch()
    const count = useSelector(state => state.number)
    return (
        <div>
            <h1>CounterByRedux</h1>
            <h2>{count}</h2>
            <button type='button' style={{ marginLeft: '10px' }} onClick={() => { dispatch(onAdd()) }}>ADD</button>
            <button type='button' style={{ marginLeft: '10px' }} onClick={() => { count > 1 ? dispatch(onSub()) : '' }}>SUB</button>
            <button type='button' style={{ marginLeft: '10px' }} onClick={() => { dispatch(onReset()) }}>RESET</button>

        </div>
    )
}

export default CounterByRedux
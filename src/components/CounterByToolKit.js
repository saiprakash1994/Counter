import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add, reset, sub } from '../redux/toolkitReducer'

const CounterByToolKit = () => {
    const dispatch = useDispatch()

    const count = useSelector(state => state.counter.number)
    return (
        <div>
            <h1>CounterByToolKit</h1>
            <h2>{count}</h2>
            <button type='button' style={{ marginLeft: '10px' }} onClick={() => { dispatch(add()) }}>ADD</button>
            <button type='button' style={{ marginLeft: '10px' }} onClick={() => { count > 1 ? dispatch(sub()) : '' }}>SUB</button>
            <button type='button' style={{ marginLeft: '10px' }} onClick={() => { dispatch(reset()) }}>RESET</button>
        </div>
    )
}

export default CounterByToolKit
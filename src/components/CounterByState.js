import React, { useState } from 'react'

const CounterByState = () => {
    const [count, setCount] = useState(1);
    return (
        <div>
            <h1>CounterByState</h1>
            <h2>{count}</h2>
            <button type='button' style={{ marginLeft: '10px' }} onClick={() => { setCount(count + 1) }}>ADD</button>
            <button type='button' style={{ marginLeft: '10px' }} onClick={() => { count > 1 ? setCount(count - 1) : '' }}>SUB</button>
            <button type='button' style={{ marginLeft: '10px' }} onClick={() => { setCount(1) }}>RESET</button>

        </div>
    )
}

export default CounterByState;
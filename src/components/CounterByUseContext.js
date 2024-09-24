import React, { useContext } from 'react'
import { MyContext } from './ContextApi'
const CounterByUseContext = () => {
    const { count, setCount } = useContext(MyContext)
    return (
        <div>
            <h1>CounterByUseContext</h1>
            <h2>{count}</h2>
            <button type='button' style={{ marginLeft: '10px' }} onClick={() => { setCount(count + 1) }}>ADD</button>
            <button type='button' style={{ marginLeft: '10px' }} onClick={() => { count > 1 ? setCount(count - 1) : '' }}>SUB</button>
        </div>
    )
}

export default CounterByUseContext
import React, { useReducer } from 'react'

const CounterByUseReducer = () => {
    const reducer = (state, action) => {
        { console.log(state, action) }

        switch (action.type) {
            case 'add':
                return { count: state.count + 1 }
            case 'sub':
                return { count: state.count - 1 }
            default:
                return { count: 1 };
        }

    }
    const [state, dispatch] = useReducer(reducer, { count: 1 })


    return (
        <div>
            <h1>CounterByUseReducer</h1>
            <h2>{state.count}</h2>
            <button type='button' style={{ marginLeft: '10px' }} onClick={() => { dispatch({ type: 'add' }) }}>ADD</button>
            <button type='button' style={{ marginLeft: '10px' }} onClick={() => { state.count > 1 ? dispatch({ type: 'sub' }) : '' }}>SUB</button>
        </div>
    )
}

export default CounterByUseReducer
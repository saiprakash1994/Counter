import React, { createContext, useState } from 'react';
const MyContext = createContext()

const ContextApi = ({ children }) => {
    const [count, setCount] = useState(1)
    return (
        <MyContext.Provider value={{ count, setCount }}>
            {children}
        </MyContext.Provider>
    )
}

export { MyContext, ContextApi }



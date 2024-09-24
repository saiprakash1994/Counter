import React from 'react'
import CounterByUseContext from './CounterByUseContext'
import { ContextApi } from './ContextApi'

const Data = () => {
    return (
        <div>
            <ContextApi>
                <CounterByUseContext />
            </ContextApi>
        </div>
    )
}

export default Data
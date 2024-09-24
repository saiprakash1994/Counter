
// import { createStore } from 'redux'
// import reducer from './redux/reduxReducer';

// const store = createStore(reducer)
// export default store;

import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './redux/toolkitReducer'
import reducer from './redux/reduxReducer';

const store = configureStore({
    reducer: {
        counter: counterReducer
    }
})

export default store;

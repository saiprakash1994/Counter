const ADD = 'ADD';
const SUB = 'SUB';
const RESET = 'RESET';


const initialState = {
    number: 1
}

export const onAdd = () => {
    return {
        type: ADD
    }

}

export const onSub = () => {
    return {
        type: SUB
    }

}
export const onReset = () => {
    return {
        type: RESET
    }
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD: {
            return {
                ...state, number: state.number + 1
            }
        }
        case SUB: {
            return {
                ...state, number: state.number - 1
            }
        }
        case RESET: {
            return {
                ...state, number: state.number = 1
            }
        }

        default:
            return state;

    }

}

export default reducer
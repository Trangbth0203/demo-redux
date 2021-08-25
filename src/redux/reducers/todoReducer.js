import { DELETE_TODO, GET_LIST_TODO, UPDATE_TODO } from '../actionTypes'

const initialState = {
    todos: [],
}

// (state, action) => newState
function todoReducer(state = initialState, action) {
    switch (action.type) {
        case GET_LIST_TODO:
            return {
                ...state,
                todos: action.payload.data,
            }
        case UPDATE_TODO:
            const cloneState = [...state.todos]
            const findIdx = state?.todos?.findIndex(item => item.id === action.payload.id)
            if (findIdx > -1) {
                cloneState[findIdx].department_name = action.payload.department_name
            }
            return {
                ...state,
                todos: cloneState,
            }
        case DELETE_TODO:
            return {
                ...state,
                todos: state?.todos?.filter(item => item.id !== action.payload)
            }
        default:
            return state
    }
}

export default todoReducer

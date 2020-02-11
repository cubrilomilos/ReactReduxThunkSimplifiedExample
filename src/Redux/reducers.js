import { UPDATE_FIRST, UPDATE_SECOND } from './constants';


function rootReducer(state, action) {
    switch (action.type) {
        case UPDATE_FIRST:
            return {
                ...state,
                firstObject: action.payload
            }
        case UPDATE_SECOND:
            return {
                ...state,
                secondObject: action.payload
            }
        default:
            return state
    }
}

export default rootReducer;
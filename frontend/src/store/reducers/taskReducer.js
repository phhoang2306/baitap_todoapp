import actionTypes from '../actions/actionTypes';
const initialState = {
    tasks : []
}
const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.QUERY_TASKS_SUCESS: 
            return {
                ...state,
                tasks: action.data
            }
        case actionTypes.QUERY_TASKS_FAIL: 
            return {
                ...state,
                tasks: []
            }
        default:
            return state;
    }
}

export default taskReducer;
import actionTypes from '../actions/actionTypes';
const initialState = {
    tasks : [], 
    res: ''
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
        case actionTypes.API_TASK_SUCESS: 
            return {
                ...state,
                res: action.res
            }
        case actionTypes.API_TASK_FAIL: 
            return {
                ...state,
                res: ''
            }
        default:
            return state;
    }
}

export default taskReducer;
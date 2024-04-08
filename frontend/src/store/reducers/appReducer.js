import actionTypes from '../actions/actionTypes';

const initialState = {
    started: true,
    language: 'vi',
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.APP_START_UP_COMPLETE: 
            return {
                ...state,
                started: true
            }
        case actionTypes.CHANGE_LANGUAGE: 
            return {
                ...state,
                language: action.language
            }
        default:
            return state;
    }
}

export default appReducer;
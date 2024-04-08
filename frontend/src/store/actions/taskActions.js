import actionTypes from './actionTypes';
import {taskService} from '../../services'

//  Get all tasks
export const fetchQueryTasks = (page, limit) =>{
    return async (dispatch, getState) => {
        try{
            page = page ? page : 1
            limit = limit ? limit : 10
            let res = await taskService.handleQueryTasks(page, limit);
            if(res){
                dispatch(fetchQueryTasksSuccess(res))
            } else {    
                dispatch(fetchQueryTasksFail());
            }
        } catch(e){
            dispatch(fetchQueryTasksFail());
            console.log("fecthGetAllDoctors error", e);
        }

    }
}
export const fetchQueryTasksSuccess = (res) => ({
    type: actionTypes.QUERY_TASKS_SUCESS,
    data: res
})
export const fetchQueryTasksFail = () =>({
    type: actionTypes. QUERY_TASKS_FAIL
})
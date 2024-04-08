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

// Delete task
export const fetchDeleteTasks = (taskId) =>{
    return async (dispatch, getState) => {
        try{
            if(taskId){
                let res = await taskService.handleOnDeleteTask(taskId);
                if(res){
                    dispatch(fetchDeleteTaskSuccess(res))
                } else {    
                    dispatch(fetchDeleteTaskFail());
                }
            }
        } catch(e){
            dispatch(fetchDeleteTaskFail());
            console.log("fecthGetAllDoctors error", e);
        }

    }
}
export const fetchDeleteTaskSuccess = (res) => ({
    type: actionTypes.API_TASK_SUCESS,
    res: res
})
export const fetchDeleteTaskFail = () =>({
    type: actionTypes. API_TASK_FAIL
})
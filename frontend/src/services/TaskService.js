import axios from "../axios";

const handleQueryTasks = (page, limit) =>{
    return axios.get(`/task?page=${page}&limit=${limit}`)
}

const handleOnDeleteTask = (taskId) =>{
    return axios.get(`/task/${taskId}`)
}

export default {
    handleQueryTasks,
    handleOnDeleteTask
}
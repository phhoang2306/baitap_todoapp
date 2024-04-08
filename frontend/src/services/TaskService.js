import axios from "../axios";
const handleQueryTasks = (page, limit) =>{
    return axios.post(`/task?page=${page}&limit${limit}`)
}

export default {
    handleQueryTasks
}
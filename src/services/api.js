import axios from 'axios';

const instance = axios.create({
    baseURL:'https://5faab88db5c645001602b103.mockapi.io'
})

export const getTasks = () => {
    return instance.get('/tasks');
}

export const getCategorizedTasks = (category) => {
    return instance.get('tasks',{
        params:{
            category:category
        }
    })
}

export const createTask = (task) => {
    return instance.post('/tasks',task)
}

export const updateTask = (taskId,task) => {
    return instance.put(`/tasks/${taskId}`,task)
}

export const deleteTask = (taskId) => {
    return instance.delete(`/tasks/${taskId}`)
}
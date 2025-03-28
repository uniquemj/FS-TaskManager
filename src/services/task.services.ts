import { findAll, create, findById, remove, edit } from '../repository/task.repo'
import { Task } from '../types/task.type'

const getAllTasks = async() =>{
    const tasks = await findAll()
    return tasks
}

const getTaskByID = async(id: string) =>{
    const tasks = await getAllTasks() as Task[]
    if(!tasks.find(task=>task.id == id)){
        return false
    }
    const task = await findById(id)
    return task
}

const createTask = async(todo:Task) =>{
    const tasks = await create(todo)
    return tasks
}

const editTask = async(id:string, todo:any)=>{
    const tasks = await getAllTasks() as Task[]
    if(!tasks.find(task=>task.id == id)){
        return false
    }
    const task = await edit(id, todo)
    return task
}

const removeTask = async(id: string) =>{
    const tasks = await getAllTasks() as Task[]
    if(!tasks.find(task=>task.id == id)){
        return false
    }
    
    const removeStatus = await remove(id)
    return removeStatus
}

const TaskServices = {
    getAllTasks,
    getTaskByID,
    createTask,
    editTask,
    removeTask
}

export default TaskServices
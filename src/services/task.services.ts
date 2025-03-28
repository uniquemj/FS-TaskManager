import { findAll, create, findById, remove, edit } from '../model/task.model'

export const getAllTaskServices = async() =>{
    const tasks = await findAll()
    return tasks
}

export const getTaskByIDServices = async(id: string) =>{
    const task = await findById(id)
    return task
}

export const createTaskServices = async(todo:any) =>{
    const tasks = await create(todo)
    return tasks
}

export const editTaskServices = async(id:string, todo:any)=>{
    const tasks = await edit(id, todo)
    return tasks
}

export const removeTaskServices = async(id: string) =>{
    const removeStatus = await remove(id)
    return removeStatus
}
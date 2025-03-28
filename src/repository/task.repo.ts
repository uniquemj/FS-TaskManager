import path from 'path'
import { readFileHelper, writeFileHelper } from '../utils/helper'
import { Task } from '../types/task.type'

const storagePath = path.join(process.cwd(), 'data.json')

export const findAll = () =>{
    return new Promise(async(resolve, reject) =>{
        try{
            const tasks = await readFileHelper(storagePath)
            resolve(tasks)
        }
        catch(e){
            await writeFileHelper(storagePath, JSON.stringify([]))
            reject("No Data present")
        }
    })
}

export const findById = (id: string) =>{
    return new Promise(async(resolve, reject)=>{
        const tasks = await readFileHelper(storagePath)
        const task = tasks.find((task) => task['id'] == id)
        if(!task){
            reject(false)
        }
        resolve(task)
    })
}

export const create = (todo: Task) =>{
    return new Promise(async(resolve, reject) =>{
        try{
            const tasks = await readFileHelper(storagePath)
            tasks.push(todo)
            await writeFileHelper(storagePath, JSON.stringify(tasks))
            resolve(todo)
        } catch(e){
            reject(e)
        }
    })
}

export const edit = (id: string, todo: Task) =>{
    return new Promise(async(resolve, reject) =>{
        const tasks = await readFileHelper(storagePath)
        const task = tasks.find(task=>task.id===id)
        if(!task){
            reject(false)
        }
        const taskIndex = tasks.findIndex(task=>task.id===id)
        tasks[taskIndex] = {...task, ...todo}
        await writeFileHelper(storagePath, JSON.stringify(tasks))
        resolve(tasks[taskIndex])
    })
}

export const remove = (id: string) =>{
    return new Promise(async(resolve, reject)=>{
        const tasks = await readFileHelper(storagePath)
        if(!tasks.find(task=>task.id==id)){
            reject(false)
        }
        const newTasks = tasks.filter(task => task.id !== id)
        await writeFileHelper(storagePath, JSON.stringify(newTasks))
        resolve(true)
    })
}
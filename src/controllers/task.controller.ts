import { Request, Response } from "express"
import { v4 } from "uuid"
import TaskServices from "../services/task.services"
import { Task, TasksResponse, MessageResponse} from "../types/task.type"

const getAllTasks = async (req: Request, res: Response): Promise<Response<TasksResponse | MessageResponse>> =>{
    try{
        const result = await TaskServices.getAllTasks() as Task[]
        if(result.length == 0){
            return res.status(404).send({message: "No Tasks Found."})
        }
        return res.status(200).send({data: result})
    } catch(e:any){
        return res.status(500).send({message: "Data Storage Not Initialized. Doing it for you."})
    }
}

const getTaskByID = async (req: Request, res: Response): Promise<Response<Task|MessageResponse>> =>{
    try{
        const {id} = req.params
        const result = await TaskServices.getTaskByID(id)

        if(!result){
            return res.status(404).send({message: "Task Not Found."})
        }
        return res.status(200).send(result)
    } catch(e:any){
        return res.status(500).send({message: e.message})
    }
}

const createTask = async (req: Request, res: Response): Promise<Response<Task|MessageResponse>> => {
    try{
        const task = {
            id: v4(),
            title: req.body.title,
            is_completed: req.body.is_completed || false
        }
        const result = await TaskServices.createTask(task)
        return res.status(201).send(result)
    } catch (e:any) {
        return res.status(500).send({message: e.message})
    }
}

const editTask = async(req: Request, res: Response): Promise<Response<Task|MessageResponse>> =>{
    try{
        const {id} = req.params
        const task = await TaskServices.editTask(id, req.body)
        if(!task){
            return res.status(404).send({message: "Task Not Found."})
        }
        return res.status(200).send(task)
    } catch (e: any) {
        return res.status(500).send({message: e.message})
    }
}

const removeTask = async (req: Request, res: Response): Promise<Response<MessageResponse>> =>{
    try{
        const {id} = req.params
        const result = await TaskServices.removeTask(id)

        if(!result){
            res.status(404).send({message:"Task Not Found."})
        }
        return res.status(200).send({message:"Task Removed!"})
    }catch(e:any){
        return res.status(500).send({message: e.message})
    }
}

const TaskController = {
    getAllTasks,
    getTaskByID, 
    createTask, 
    editTask,
    removeTask
}

export default TaskController
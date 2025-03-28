import { Request, Response } from "express"
import { v4 } from "uuid"
import { createTaskServices, editTaskServices, getAllTaskServices, getTaskByIDServices, removeTaskServices } from "../services/task.services"

export const getAllTaskController = async (req: Request, res: Response): Promise<any> =>{
    try{
        const result = await getAllTaskServices()
        return res.status(200).send({data: result})
    } catch(e:any){
        return res.status(500).send({message: "Data Storage Not Initialized. Doing it for you."})
    }
}

export const getTaskByIDController = async (req: Request, res: Response): Promise<any> =>{
    try{
        const {id} = req.params
        const result = await getTaskByIDServices(id)
        if(!result){
            return res.status(404).send({message: "Task Not Found."})
        }
        return res.status(200).send(result)
    } catch(e:any){
        return res.status(500).send({message: e.message})
    }
}

export const createTaskController = async (req: Request, res: Response): Promise<any> => {
    try{
        const task = {
            id: v4(),
            title: req.body.title,
            is_completed: req.body.is_completed || false
        }
        const result = await createTaskServices(task)
        return res.status(201).send(result)
    } catch (e:any) {
        return res.status(500).send({message: e.message})
    }
}

export const editTaskController = async(req: Request, res: Response): Promise<any> =>{
    try{
        const {id} = req.params
        const task = await editTaskServices(id, req.body)
        if(!task){
            return res.status(404).send({message: "Task Not Found."})
        }
        return res.status(200).send(task)
    } catch (e: any) {
        return res.status(500).send({message: e.message})
    }
}

export const removeTaskController = async (req: Request, res: Response): Promise<any> =>{
    try{
        const {id} = req.params
        const result = await removeTaskServices(id)
        if(!result){
            res.status(404).send({message:"Task Not Found."})
        }
        return res.status(200).send({message:"Task Removed!"})
    }catch(e:any){
        return res.status(500).send({message: e.message})
    }
}
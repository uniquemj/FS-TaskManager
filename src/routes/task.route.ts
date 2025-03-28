import express from 'express'
import { getAllTaskController, createTaskController, getTaskByIDController, removeTaskController, editTaskController } from '../controllers/task.controller'
const route = express.Router()

route.get('/tasks', getAllTaskController)
route.get('/tasks/:id', getTaskByIDController)

route.post('/tasks', createTaskController)
route.put('/tasks/:id', editTaskController)
route.delete('/tasks/:id', removeTaskController)
export default route
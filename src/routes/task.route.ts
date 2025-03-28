import express from 'express'
import TaskController from '../controllers/task.controller'

const route = express.Router()

route.get('/tasks', TaskController.getAllTasks)
route.get('/tasks/:id', TaskController.getTaskByID)

route.post('/tasks', TaskController.createTask)
route.put('/tasks/:id', TaskController.editTask)
route.delete('/tasks/:id', TaskController.removeTask)

export default route
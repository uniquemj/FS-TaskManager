import express from 'express'
import 'dotenv/config'
import taskRoute from './routes/task.route'

const app = express()

app.use(express.json())

app.use('/api', taskRoute)


const PORT = process.env.PORT || 8080
app.listen(PORT,()=>{
    console.log(`Server running at: ${PORT}`)
})
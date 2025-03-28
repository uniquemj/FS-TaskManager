export interface Task{
    id?: string,
    title: string,
    is_completed?: boolean
}

export interface TasksResponse{
    data: Task[]
}

export interface MessageResponse{
    message: string
}
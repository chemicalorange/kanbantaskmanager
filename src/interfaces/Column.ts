import Task from "./Task";

interface Column {
    id: string,
    name: string,
    hex: string,
    tasks: Task[]
}

export default Column
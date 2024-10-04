import SubTask from "./SubTask";

interface Task {
    id: string,
    name: string,
    description: string,
    subtasks: SubTask[],
    status: boolean
}

export default Task
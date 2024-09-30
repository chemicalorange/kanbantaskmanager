import SubTask from "./SubTask";

interface Task {
    id: string,
    name: string,
    subtasks: SubTask[],
    status: boolean
}

export default Task
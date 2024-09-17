import SubTask from "./SubTask";

interface Task {
    id: string,
    name: string,
    subtasks: SubTask[],
    status: string
}

export default Task
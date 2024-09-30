import Task from "../../../interfaces/Task"
import styles from './Task.module.css'

type TaskProps = {
    task: Task
}

const Task = ({task}: TaskProps) => {
  return (
    <div className={styles.task_container}>
        <p className={styles.task_name}>{task.name}</p>
        {task.subtasks.length > 0 && 
            <span>{task.subtasks.filter(item => item.isCompleted == true).length} of {task.subtasks.length} subtasks</span>
        }
    </div>
  )
}

export default Task
import Task from "../../../interfaces/Task"
import styles from './Task.module.css'
import ViewTaskModal from "../../../modals/ViewTaskModal/ViewTaskModal"
import useModal from "../../../hooks/useModal"
import Column from "../../../interfaces/Column"

type TaskProps = {
    task: Task,
    column: Column
}

const Task = ({task, column}: TaskProps) => {
  const [isShowing, toggle] = useModal()

  const onClickTaskHandler = () => {
    toggle()
  }
  
  return (
    <>
        <div className={styles.task_container} onClick={onClickTaskHandler}>
            <p className={styles.task_name}>{task.name}</p>
            {task.subtasks.length > 0 && 
                <span>{task.subtasks.filter(item => item.isCompleted == true).length} of {task.subtasks.length} subtasks</span>
            }
        </div>
        {isShowing && <ViewTaskModal closeModal={toggle} task={task} column={column} /> }
    </>
  )
}

export default Task
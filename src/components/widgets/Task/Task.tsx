import type Task from "../../../interfaces/Task"
import styles from './Task.module.css'
import ViewTaskModal from "../../../modals/ViewTaskModal/ViewTaskModal"
import useModal from "../../../hooks/useModal"
import Column from "../../../interfaces/Column"
import CreateTaskModal from "../../../modals/CreateTaskModal/CreateTaskModal"
import { useAppDispatch } from "../../../store/hooks"
import { deleteTask, createTask } from "../../../store/slices/appSlice"

type TaskProps = {
    task: Task,
    column: Column
}

const Task = ({task, column}: TaskProps) => {
  const [isShowing, toggle] = useModal()
  const [isShowingEditModal, toggleEditModal] = useModal()
  
  const dispatch = useAppDispatch()

  const onClickTaskHandler = () => {
    toggle()
  }

  const editTaskFunction = (taskData: Task, columnId: string) => {
    dispatch(createTask({columnId, taskData}))
    dispatch(deleteTask({columnId: column.id, taskId: task.id}))
  }
  
  return (
    <>
        <div className={styles.task_container} onClick={onClickTaskHandler}>
            <p className={styles.task_name}>{task.name}</p>
            {task.subtasks.length > 0 && 
                <span>{task.subtasks.filter(item => item.isCompleted == true).length} of {task.subtasks.length} subtasks</span>
            }
        </div>
        {isShowing && <ViewTaskModal closeModal={toggle} task={task} column={column} showEditModal={() => {toggle(); toggleEditModal()}} /> }
        {isShowingEditModal && <CreateTaskModal closeModal={toggleEditModal} task={task} changeTaskFunction={editTaskFunction} /> }
    </>
  )
}

export default Task
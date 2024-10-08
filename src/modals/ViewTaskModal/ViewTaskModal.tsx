import Modal from "../../components/widgets/Modal/Modal"
import Button from "../../components/shared/Button/Button"
import Label from "../../components/shared/Label/Label"
import Select from "../../components/shared/Select/Select"
import Title from "../../components/shared/Title/Title"
import Task from "../../interfaces/Task"
import Description from "../../components/shared/Description/Description"
import BooleanInput from "../../components/shared/BooleanInput/BooleanInput"
import { useAppDispatch, useAppSelector } from "../../store/hooks"
import { ChangeEvent, MouseEventHandler, useState } from "react"
import { createTask, deleteTask } from "../../store/slices/appSlice"
import Column from "../../interfaces/Column"
import SubTask from "../../interfaces/SubTask"
import CircleOptions from "../../components/shared/CircleOptions/CircleOptions"

type ChangeTaskModal = {
    closeModal: Function,
    task: Task,
    column: Column,
    showEditModal: MouseEventHandler<HTMLSpanElement>
}

const ViewTaskModal = ({closeModal, task, column, showEditModal}: ChangeTaskModal) => {
  const currentBoardId = useAppSelector(state => state.appSlice.currentBoardId)
  const currentBoard = useAppSelector(state => state.appSlice.boards.filter(item => item.id === currentBoardId)[0]) 

  const dispatch = useAppDispatch()

  const [currentColumn, setCurrentColumn] = useState(column.id)
  const [currentTask, setCurrentTask] = useState(task)
  
  const changeSelectHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    setCurrentColumn(e.target.value)
  }

  const clickBooleanInputHandler = (subtask: SubTask) => {
    setCurrentTask((prevState) => {
      const updatedSubtasks = prevState.subtasks.map((item) => {
        if (item.id === subtask.id) {
          return {
            ...item,
            isCompleted: !item.isCompleted
          };
        }
        return item;
      });
  
      return {
        ...prevState,
        subtasks: updatedSubtasks
      };
    })
  }
  
  const clickButtonHandler = () => {
    dispatch(deleteTask({columnId: column.id, taskId: task.id}))
    dispatch(createTask({columnId: currentColumn, taskData: currentTask}))
    closeModal()
  }

  const clickDeleteButton = () => {
    dispatch(deleteTask({columnId: column.id, taskId: task.id}))
  }
  return (
    <Modal closeModal={closeModal}>
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
          <Title title={task.name} />
          <CircleOptions >
            <span onClick={showEditModal} style={{cursor: 'pointer', margin: '5px 0'}}>Edit Task</span>
            <span onClick={clickDeleteButton} style={{cursor: 'pointer', color: 'red', margin: '5px 0'}}>Delete Task</span>
          </CircleOptions>
        </div>
        <Description text={task.description} />
        <Label title={`Subtasks ${currentTask.subtasks.filter(item => item.isCompleted == true).length} of ${currentTask.subtasks.length}`}>
          {currentTask.subtasks.map(item => {
            return <BooleanInput onClickHandler={clickBooleanInputHandler} subtask={item} key={item.id} />
          })}
        </Label>
        <Label title="Current Status">
            <Select variants={Array.from(new Set([column, ...currentBoard.columns])) || null} onChangeHandler={changeSelectHandler} />
        </Label>
        <Button color="purple" title="Save" onClickHandler={clickButtonHandler} />
    </Modal>
  )
}

export default ViewTaskModal
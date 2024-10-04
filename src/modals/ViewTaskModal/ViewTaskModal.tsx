import Modal from "../../components/widgets/Modal/Modal"
import Button from "../../components/shared/Button/Button"
import Label from "../../components/shared/Label/Label"
import Select from "../../components/shared/Select/Select"
import Title from "../../components/shared/Title/Title"
import Task from "../../interfaces/Task"
import Description from "../../components/shared/Description/Description"
import BooleanInput from "../../components/shared/BooleanInput/BooleanInput"
import { useAppDispatch, useAppSelector } from "../../store/hooks"
import { ChangeEvent, useState } from "react"
import { createTask, deleteTask } from "../../store/slices/appSlice"
import Column from "../../interfaces/Column"
import SubTask from "../../interfaces/SubTask"

type ChangeTaskModal = {
    closeModal: Function,
    task: Task,
    column: Column
}

const ViewTaskModal = ({closeModal, task, column}: ChangeTaskModal) => {
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

  return (
    <Modal closeModal={closeModal}>
        <Title needOption={true} title={task.name} />
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
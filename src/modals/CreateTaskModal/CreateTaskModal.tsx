import { ChangeEvent, useState } from "react"
import Button from "../../components/shared/Button/Button"
import Input from "../../components/shared/Input/Input"
import Label from "../../components/shared/Label/Label"
import Select from "../../components/shared/Select/Select"
import SubInput from "../../components/shared/SubInput/SubInput"
import Textarea from "../../components/shared/Textarea/Textarea"
import Title from "../../components/shared/Title/Title"
import Modal from "../../components/widgets/Modal/Modal"
import { useAppDispatch, useAppSelector } from "../../store/hooks"
import {v4 as uuid} from 'uuid'

import { createTask } from "../../store/slices/appSlice"

type CreateTaskModalProps = {
    closeModal: Function
}

const CreateTaskModal = ({closeModal}: CreateTaskModalProps) => {
  const {currentBoardId} = useAppSelector(state => state.appSlice)
  const currentBoard = useAppSelector(state => state.appSlice.boards.filter(item => item.id === currentBoardId)[0])
  const [currentColumn, setCurrentColumn] = useState(currentBoard.columns[0].id)

  const dispatch = useAppDispatch()

  const [taskData, setTaskData] = useState({
    id: uuid(),
    name: null,
    description: null,
    subtasks: []
  })

  const onChangeNameHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setTaskData((prevState) => {
        return {
            ...prevState,
            name: e.target.value
        }
    })
  }

  const onChangeDescriptionHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setTaskData((prevState) => {
        return {
            ...prevState,
            description: e.target.value
        }
    })
  }

  const onClickAddSubtaskButtonHandler = () => {
    setTaskData((prevState) => {
        const updatedSubtasks = [...prevState.subtasks, {id: uuid(), name: 'Unnamed', isCompleted: false}]
        return {
            ...prevState,
            subtasks: updatedSubtasks
        }
    })
  }

  const onChangeSubtaskHandler = (e, object: {id: string}) => {
    const currentSubtaskIndex = taskData.subtasks.findIndex(item => item.id === object.id)
    setTaskData((prevState) => {
        const updatedSubtasks = prevState.subtasks.map((subtask, index) => index === currentSubtaskIndex ? { ...subtask, name: e.target.value }: subtask );
        return {
            ...prevState,
            subtasks: updatedSubtasks
        }
    })
  }

  const onClickDeleteSubtaskHandler = (object: {id: string}) => {
    setTaskData((prevState) => {
        const updatedSubtasks = prevState.subtasks.filter(item => item.id !== object.id)
        return {
            ...prevState,
            subtasks: updatedSubtasks
        }
    })
  }

  const onChangeSelectHandler = (e) => {
    setCurrentColumn(e.target.value)
  }

  const onClickCreateTaskButtonHandler = () => {
    dispatch(createTask({
        boardId: currentBoardId,
        columnId: currentColumn,
        taskData
    }))
    closeModal()
  }

  return (
    <Modal closeModal={closeModal}>
        <Title title="Add New Task" needOption={false} />
        <Label title="Title">
            <Input value={undefined} placeholder="e.g Take coffee break" type="text" onChangeHandler={(e) => onChangeNameHandler(e)} />
        </Label> 
        <Label title="Description">
            <Textarea placeholder="e.g It`s always good to take a break" onChangeHandler={(e) => onChangeDescriptionHandler(e)} />
        </Label>
        <Label title="Subtasks">
            {taskData.subtasks.length > 0 && 
                taskData.subtasks.map(item => {
                    return <SubInput onChangeHandler={onChangeSubtaskHandler} onClickHandler={onClickDeleteSubtaskHandler}  key={item.id} subInputData={item} />
                })
            }
            <Button color="white" title="+ Add New Subtask" onClickHandler={onClickAddSubtaskButtonHandler} />
        </Label>
        <Label title="Status">
            <Select variants={currentBoard.columns} onChangeHandler={onChangeSelectHandler} />
        </Label>
        <Button color="purple" title="Create Task" onClickHandler={onClickCreateTaskButtonHandler} />
    </Modal>
  )
}

export default CreateTaskModal
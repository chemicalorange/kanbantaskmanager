import { useState } from "react"
import Button from "../../components/shared/Button/Button"
import Input from "../../components/shared/Input/Input"
import Label from "../../components/shared/Label/Label"
import Select from "../../components/shared/Select/Select"
import SubInput from "../../components/shared/SubInput/SubInput"
import Textarea from "../../components/shared/Textarea/Textarea"
import Title from "../../components/shared/Title/Title"
import Modal from "../../components/widgets/Modal/Modal"
import { useAppSelector } from "../../store/hooks"

type CreateTaskModalProps = {
    closeModal: Function
}

const CreateTaskModal = ({closeModal}: CreateTaskModalProps) => {
  const {currentBoardId} = useAppSelector(state => state.appSlice)
  const currentBoard = useAppSelector(state => state.appSlice.boards.filter(item => item.id === currentBoardId)[0])

  const [variants] = useState(currentBoard.columns?.map(item => item.name))

  return (
    <Modal closeModal={closeModal}>
        <Title title="Add New Task" needOption={false} />
        <Label title="Title">
            <Input placeholder="e.g Take coffee break" type="text" onChangeHandler={() => {}} />
        </Label> 
        <Label title="Description">
            <Textarea placeholder="e.g It`s always good to take a break" onChangeHandler={() => {}} />
        </Label>
        <Label title="Subtasks">
            <SubInput subInput={{}} />
            <Button color="white" title="+ Add New Subtask" onClickHandler={() => {}} />
        </Label>
        <Label title="Status">
            <Select variants={variants} onClickHandler={() => {}} />
        </Label>
        <Button color="purple" title="Create Task" onClickHandler={() => {}} />
    </Modal>
  )
}

export default CreateTaskModal
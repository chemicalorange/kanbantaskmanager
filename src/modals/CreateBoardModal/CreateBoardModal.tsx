import { ChangeEvent, useState } from "react"
import Button from "../../components/shared/Button/Button"
import Input from "../../components/shared/Input/Input"
import Label from "../../components/shared/Label/Label"
import SubInput from "../../components/shared/SubInput/SubInput"
import Title from "../../components/shared/Title/Title"
import Modal from "../../components/widgets/Modal/Modal"
import { useAppDispatch } from "../../store/hooks"
import { createBoard, setCurrentBoard } from "../../store/slices/appSlice"
import {v4 as uuid} from 'uuid'
import randomColor from 'randomcolor'
import { useNavigate } from "react-router-dom"

type CreateBoardModalProps = {
    closeModal: Function
}

const CreateBoardModal = ({closeModal}: CreateBoardModalProps) => {
  const dispatch = useAppDispatch()

  const navigate = useNavigate()

  const [boardData, setBoardData] = useState({
    id: uuid(),
    name: 'New Board',
    columns: [
        {
            id: uuid(),
            name: 'Todo',
            hex: '#49c4e5',
            tasks: []
        },
        {
            id: uuid(),
            name: 'Doing',
            hex: '#8471f2',
            tasks: []
        },
        {
            id: uuid(),
            name: 'Done',
            hex: '#67e2ae',
            tasks: []
        },
    ]
  })

  const onChangeNameHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setBoardData((prevState) => {
        return {
            ...prevState,
            name: e.target.value
        }
    })
  }

  const onChangeColumnNameHandler = (e: ChangeEvent<HTMLInputElement>, object: {id: string}) => {
    const currentColumnIndex = boardData.columns.findIndex(item => item.id === object.id)

    setBoardData((prevState) => {
        const updatedColumns = prevState.columns.map((column, index) => {
            return index === currentColumnIndex ? { ...column, name: e.target.value } : column
        });

        return {
            ...prevState,
            columns: updatedColumns
        };
    })
  }

  const onClickCreateColumnButtonHandler = () => {
    setBoardData((prevState) => {
        const updatedColumns = [...prevState.columns, {name: 'Unnamed', id: uuid(), hex: randomColor({luminosity: 'light', hue: 'random'}), tasks: []}]
        return {
            ...prevState,
            columns: updatedColumns
        }
    })
  }

  const onClickDeleteColumnButton = (object: {id: string}) => {
    const currentColumnIndex = boardData.columns.findIndex(item => item.id === object.id)
    setBoardData((prevState) => {
        const updatedColumns = prevState.columns.filter(item => item.id !== prevState.columns[currentColumnIndex].id)
        return {
            ...prevState,
            columns: updatedColumns
        }
    })
  }

  const onClickCreateBoardButtonHandler = () => {
    dispatch(createBoard({boardData}))
    dispatch(setCurrentBoard({id: boardData.id}))
    closeModal()
    navigate(`../${boardData.id}`)
  }

  return (
    <Modal closeModal={closeModal} >
        <Title title="Add New Board" needOption={false} />
        <Label title="Name">
            <Input placeholder="e.g Web Design" type="text" value={boardData.name} onChangeHandler={onChangeNameHandler} />
        </Label> 
        <Label title="Columns">
            {boardData.columns.map(item => {
                return <SubInput key={item.id} subInputData={item} onChangeHandler={onChangeColumnNameHandler} onClickHandler={onClickDeleteColumnButton} />
            })}
            <Button color="white" title="+ Add New Column" onClickHandler={onClickCreateColumnButtonHandler} />
        </Label>
        <Button color="purple" title="Create New Board" onClickHandler={onClickCreateBoardButtonHandler} />
    </Modal>
  )
}

export default CreateBoardModal
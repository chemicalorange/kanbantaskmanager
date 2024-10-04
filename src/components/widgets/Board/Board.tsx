import { useAppDispatch, useAppSelector } from '../../../store/hooks'
import styles from './Board.module.css'
import Column from '../Column/Column'
import ColumnPlace from '../ColumnPlace/ColumnPlace'
import useModal from '../../../hooks/useModal'
import CreateBoardModal from '../../../modals/CreateBoardModal/CreateBoardModal'
import type Board from '../../../interfaces/Board'
import { changeBoard } from '../../../store/slices/appSlice'

const Board = () => {
  const currentBoardId = useAppSelector(state => state.appSlice.currentBoardId)
  const currentBoard = useAppSelector(state => state.appSlice.boards.filter(item => item.id === currentBoardId)[0])

  const dispatch = useAppDispatch()

  const [isShowing, toggle] = useModal()

  const changeBoardFunction = (boardData: Board) => {
    dispatch(changeBoard({boardData}))
  }

  return (
    <>
      <div className={styles.board_container} >
        {currentBoard.columns.map((item, index) => {
            return (
                <Column column={item} key={index} />
            )
        })}
        <ColumnPlace onClickHandler={toggle} />
      </div>
      {isShowing && <CreateBoardModal board={currentBoard} closeModal={toggle} changeBoardFunction={changeBoardFunction} /> }
    </>
  )
}

export default Board
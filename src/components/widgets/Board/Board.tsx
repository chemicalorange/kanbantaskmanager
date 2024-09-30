import { useAppSelector } from '../../../store/hooks'
import styles from './Board.module.css'
import Column from '../Column/Column'

const Board = () => {
  const currentBoardId = useAppSelector(state => state.appSlice.currentBoardId)
  const currentBoard = useAppSelector(state => state.appSlice.boards.filter(item => item.id === currentBoardId)[0])
  return (
    <div className={styles.board_container} >
        {currentBoard.columns.map((item, index) => {
            return (
                <Column column={item} key={index} />
            )
        })}
    </div>
  )
}

export default Board
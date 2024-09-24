import { useAppSelector } from '../../../store/hooks'
import BoardListItem from '../BoardListItem/BoardListItem'
import styles from './BoardsList.module.css'
import BoardIcon from '../../../assets/svg/icon-board.svg?react'

const BoardsList = () => {
    const boards = useAppSelector(state => state.appSlice.boards)

    return (
      <div className={styles.boards_container}>
          <ul className={styles.boards_list}>
              {boards.length > 0 && 
                  boards.map((item, index) => {
                      return <BoardListItem boardId={item.id} boardTitle={item.name} key={index} />
                  })
              }
          </ul>

          <button className={styles.add_new_board_button}> <BoardIcon /> + Create New Board</button>
      </div>
    )
}

export default BoardsList
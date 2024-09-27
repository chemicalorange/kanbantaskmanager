import { useAppSelector } from '../../../store/hooks'
import BoardListItem from '../BoardListItem/BoardListItem'
import styles from './BoardsList.module.css'
import BoardIcon from '../../../assets/svg/icon-board.svg?react'
import useModal from '../../../hooks/useModal'
import CreateBoardModal from '../../../modals/CreateBoardModal/CreateBoardModal'

const BoardsList = () => {
    const boards = useAppSelector(state => state.appSlice.boards)
    const [isShowing, toggleModal] = useModal() 

    const onClickButtonHandler = () => {
        toggleModal()
    }
    

    return (
      <div className={styles.boards_container}>
          <ul className={styles.boards_list}>
              {boards.length > 0 && 
                  boards.map((item, index) => {
                      return <BoardListItem boardId={item.id} boardTitle={item.name} key={index} />
                  })
              }
          </ul>

          <button onClick={onClickButtonHandler} className={styles.add_new_board_button}> <BoardIcon /> + Create New Board</button>
          {isShowing && <CreateBoardModal closeModal={toggleModal} /> }
      </div>
    )
}

export default BoardsList
import { useAppDispatch, useAppSelector } from '../../../store/hooks'
import styles from './Header.module.css'
import Button from '../../shared/Button/Button'
import CreateTaskModal from '../../../modals/CreateTaskModal/CreateTaskModal'
import useModal from '../../../hooks/useModal'
import CircleOptions from '../../shared/CircleOptions/CircleOptions'
import classNames from 'classnames'
import { changeBoard, deleteBoard } from '../../../store/slices/appSlice'
import { useNavigate } from 'react-router-dom'
import CreateBoardModal from '../../../modals/CreateBoardModal/CreateBoardModal'
import type Board from '../../../interfaces/Board'

const Header = () => {
  const currentBoardId = useAppSelector(state => state.appSlice.currentBoardId)
  const currentBoard = useAppSelector(state => state.appSlice.boards.filter(item => item.id === currentBoardId)[0])

  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const [isShowing, toggle] = useModal()
  const [isShowingEditModal, toggleEditModal] = useModal()

  const clickDeleteButton = () => {
    dispatch(deleteBoard())
    navigate('../')
  }

  const clickEditButton = () => {
    toggleEditModal()
  }

  const changeBoardFunction = (boardData: Board) => {
    dispatch(changeBoard({boardData}))
  }

  return (
    <header className={styles.header}>
        <div className={styles.header_name}>
            <p>{currentBoard?.name || 'Create a new board!'}</p>
        </div>
        {currentBoard && 
          <div className={styles.header_button} >
            <Button title='+ Add New Task' color='purple' onClickHandler={toggle} />
            <CircleOptions>
              <span onClick={clickEditButton} className={styles.options_span}>Edit Board</span>
              <span onClick={clickDeleteButton} className={classNames(styles.options_span, styles.options_danger)}>Delete Board</span>
            </CircleOptions>
          </div>
        }
        {isShowing && <CreateTaskModal closeModal={toggle} /> }
        {isShowingEditModal && <CreateBoardModal closeModal={toggleEditModal} board={currentBoard} changeBoardFunction={changeBoardFunction} /> }
    </header>
  )
}

export default Header
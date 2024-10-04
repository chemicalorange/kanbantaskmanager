import { useAppDispatch, useAppSelector } from '../../../store/hooks'
import styles from './Header.module.css'
import Button from '../../shared/Button/Button'
import CreateTaskModal from '../../../modals/CreateTaskModal/CreateTaskModal'
import useModal from '../../../hooks/useModal'
import CircleOptions from '../../shared/CircleOptions/CircleOptions'
import classNames from 'classnames'
import { deleteBoard } from '../../../store/slices/appSlice'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const currentBoardId = useAppSelector(state => state.appSlice.currentBoardId)
  const currentBoard = useAppSelector(state => state.appSlice.boards.filter(item => item.id === currentBoardId)[0])

  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const [isShowing, toggle] = useModal()

  const clickDeleteButton = () => {
    dispatch(deleteBoard())
    navigate('../')
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
              <span onClick={clickDeleteButton} className={classNames(styles.options_span, styles.options_danger)}>Delete Board</span>
            </CircleOptions>
          </div>
        }
        {isShowing && <CreateTaskModal closeModal={toggle} /> }
    </header>
  )
}

export default Header
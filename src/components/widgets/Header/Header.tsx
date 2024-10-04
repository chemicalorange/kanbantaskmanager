import { useAppSelector } from '../../../store/hooks'
import styles from './Header.module.css'
import Button from '../../shared/Button/Button'
import CreateTaskModal from '../../../modals/CreateTaskModal/CreateTaskModal'
import useModal from '../../../hooks/useModal'

const Header = () => {
  const currentBoardId = useAppSelector(state => state.appSlice.currentBoardId)
  const currentBoard = useAppSelector(state => state.appSlice.boards.filter(item => item.id === currentBoardId)[0])

  const [isShowing, toggle] = useModal()

  return (
    <header className={styles.header}>
        <div className={styles.header_name}>
            <p>{currentBoard.name}</p>
        </div>
        <div>
            <Button title='+ Add New Task' color='purple' onClickHandler={toggle} />
        </div>
        {isShowing && <CreateTaskModal closeModal={toggle} /> }
    </header>
  )
}

export default Header
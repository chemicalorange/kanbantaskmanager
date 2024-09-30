import { useAppSelector } from '../../../store/hooks'
import styles from './Header.module.css'
import Button from '../../shared/Button/Button'

const Header = () => {
  const currentBoardId = useAppSelector(state => state.appSlice.currentBoardId)
  const currentBoard = useAppSelector(state => state.appSlice.boards.filter(item => item.id === currentBoardId)[0])

  return (
    <header className={styles.header}>
        <div className={styles.header_name}>
            <p>{currentBoard.name}</p>
        </div>
        <div>
            <Button title='+ Add New Task' color='purple' onClickHandler={() => {}} />
        </div>
    </header>
  )
}

export default Header
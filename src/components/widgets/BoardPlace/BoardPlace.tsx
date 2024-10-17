import useModal from '../../../hooks/useModal'
import CreateBoardModal from '../../../modals/CreateBoardModal/CreateBoardModal'
import styles from './BoardPlace.module.css'

const BoardPlace = () => {
  
  const [isShowing, toggle] = useModal()

  return (
    <>
        <div className={styles.board_place_container}>
            <div onClick={toggle} className={styles.board_place}>
                <p>Create New Board</p>
            </div>
        </div>
        {isShowing && <CreateBoardModal closeModal={toggle} /> }
    </>
  )
}

export default BoardPlace
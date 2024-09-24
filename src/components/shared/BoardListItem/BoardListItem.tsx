import BoardIcon from '../../../assets/svg/icon-board.svg?react'
import { useNavigate, useParams } from 'react-router-dom'
import styles from './BoardListItem.module.css'
import classNames from 'classnames'

type BoardListItemProps = {
    boardTitle: string,
    boardId: string
}

const BoardListItem = ({boardTitle, boardId}: BoardListItemProps) => {
  const navigate = useNavigate()
  const {boardId: currentBoardId} = useParams()

  const onClickHandler = () => {
    navigate(`/${boardId}`)
  }

  return (
    <li className={classNames(styles.board_link, boardId == currentBoardId ? styles.board_link_active : styles.board_link_unactive)} onClick={onClickHandler}>
        <p className={styles.boards_title}> <BoardIcon /> {boardTitle} </p>
    </li>
  )
}

export default BoardListItem
import BoardIcon from '../../../assets/svg/icon-board.svg?react'
import { useNavigate } from 'react-router-dom'
import styles from './BoardListItem.module.css'
import classNames from 'classnames'
import { useAppDispatch, useAppSelector } from '../../../store/hooks'
import { setCurrentBoard } from '../../../store/slices/appSlice'

type BoardListItemProps = {
    boardTitle: string,
    boardId: string
}

const BoardListItem = ({boardTitle, boardId}: BoardListItemProps) => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const currentBoardId = useAppSelector(state => state.appSlice.currentBoardId)

  const onClickHandler = () => {
    navigate(`/${boardId}`)
    dispatch(setCurrentBoard({id: boardId}))
  }

  return (
    <li className={classNames(styles.board_link, boardId == currentBoardId ? styles.board_link_active : null)} onClick={onClickHandler}>
        <p className={styles.boards_title}> <BoardIcon /> {boardTitle} </p>
    </li>
  )
}

export default BoardListItem
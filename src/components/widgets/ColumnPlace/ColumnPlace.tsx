import styles from './ColumnPlace.module.css'

type ColumnPlaceProps = {
    onClickHandler: () => void
}

const ColumnPlace = ({onClickHandler}: ColumnPlaceProps) => {
  return (
    <div onClick={onClickHandler} className={styles.column_place}>
        <p>+ New Column</p>
    </div>
  )
}

export default ColumnPlace
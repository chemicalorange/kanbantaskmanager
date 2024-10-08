import classNames from "classnames"
import type Column from "../../../interfaces/Column"
import HexCircle from "../../shared/HexCircle/HexCircle"
import UppercaseCounter from "../../shared/UppercaseCounter/UppercaseCounter"
import Task from "../Task/Task"
import styles from './Column.module.css'

type ColumnProps = {
    column: Column
}

const Column = ({column}: ColumnProps) => {
  return (
    <div className={styles.column_container}>
        <div className={styles.column_header}>
            <HexCircle hex={column.hex} />
            <UppercaseCounter title={column.name} count={column.tasks.length} />
        </div>
        <div className={classNames(styles.column_body, column.tasks.length < 1 ? styles.empty_column : null)}>
            {column.tasks.map(item => {
                return <Task column={column} task={item} key={item.id} />
            })}
        </div>
    </div>
  )
}

export default Column
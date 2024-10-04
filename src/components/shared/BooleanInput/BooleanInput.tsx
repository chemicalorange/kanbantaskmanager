import SubTask from '../../../interfaces/SubTask'
import styles from './BooleanInput.module.css'
import classNames from 'classnames'

type BooleanInputProps = {
    subtask: SubTask,
    onClickHandler: (subtask: SubTask) => void
}

const BooleanInput = ({subtask, onClickHandler}: BooleanInputProps) => {
  return (
    <div onClick={() => onClickHandler(subtask)} className={classNames([styles.boolean_input_container, subtask.isCompleted ? styles.boolean_input_container__active : null])}>
        <input type="checkbox" checked={subtask.isCompleted} readOnly />
        <p>{subtask.name}</p>
    </div>
  )
}

export default BooleanInput
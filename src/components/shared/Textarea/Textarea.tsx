import { ChangeEventHandler } from "react"
import styles from './Textarea.module.css'

type TextareaProps = {
    placeholder: string,
    onChangeHandler: ChangeEventHandler<HTMLTextAreaElement>,
    value: string | undefined
}

const Textarea = ({placeholder, onChangeHandler, value}: TextareaProps) => {
  return (
    <textarea value={value} className={styles.textarea} placeholder={placeholder} onChange={onChangeHandler} cols={30} rows={10} />
  )
}

export default Textarea
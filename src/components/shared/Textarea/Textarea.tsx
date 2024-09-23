import { ChangeEventHandler } from "react"
import styles from './Textarea.module.css'

type TextareaProps = {
    placeholder: string,
    onChangeHandler: ChangeEventHandler<HTMLTextAreaElement>
}

const Textarea = ({placeholder, onChangeHandler}: TextareaProps) => {
  return (
    <textarea className={styles.textarea} placeholder={placeholder} onChange={onChangeHandler} cols={30} rows={10} />
  )
}

export default Textarea
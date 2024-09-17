import { ChangeEventHandler } from "react"
import styles from './Input.module.css'

type InputProps = {
    placeholder: string,
    type: string,
    onChangeHandler: ChangeEventHandler<HTMLInputElement>,
    value: string | undefined
}

const Input = ({placeholder, type, value, onChangeHandler}: InputProps) => {
  return (
    <input className={styles.input} defaultValue={value} type={type} placeholder={placeholder} onChange={onChangeHandler} />
  )
}

export default Input
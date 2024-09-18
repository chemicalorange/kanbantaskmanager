import { ChangeEventHandler } from 'react'
import styles from './Select.module.css'
import Column from '../../../interfaces/Column'

type SelectProps = {
    variants: Column[]
    onChangeHandler: ChangeEventHandler<HTMLSelectElement>
}

const Select = ({variants, onChangeHandler}: SelectProps) => {
  return (
    <select onChange={(e) => onChangeHandler(e)} className={styles.select}>
        {variants.map((item, index) => {
            return <option key={index} value={item.id}>{item.name}</option>
        })}
    </select>
  )
}

export default Select
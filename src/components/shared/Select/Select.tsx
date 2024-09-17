import { useState, useEffect, MouseEventHandler } from 'react'
import styles from './Select.module.css'

type SelectProps = {
    variants: string[]
    onClickHandler: MouseEventHandler<HTMLSelectElement>
}

const Select = ({variants, onClickHandler}: SelectProps) => {
  const [selected, setSelected] = useState(variants[0])

  return (
    <select onClick={onClickHandler} className={styles.select}>
        {variants.map((item, index) => {
            return <option className={styles.option} key={index} value={item}>{item}</option>
        })}
    </select>
  )
}

export default Select
import { ReactNode } from 'react'
import styles from './Label.module.css'

type LabelProps = {
    title: string,
    children: ReactNode
}

const Label = ({title, children}: LabelProps) => {
  return (
    <div className={styles.label}>
        <p>{title}</p>
        <div>
            {children}
        </div>
    </div>
  )
}

export default Label
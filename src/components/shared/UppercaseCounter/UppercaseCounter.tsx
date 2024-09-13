import styles from './UppercaseCounter.module.css'

type UppercaseCounterProps = {
    title: string,
    count: number
}

const UppercaseCounter = ({ title, count }: UppercaseCounterProps) => {
  return (
    <h3 className={styles.uppercase_counter}>{title} ({count})</h3>
  )
}

export default UppercaseCounter
import styles from './HexCircle.module.css'

type HexCircleProps = {
    hex: string
}

const HexCircle = ({hex}: HexCircleProps) => {
  return (
    <div style={{backgroundColor: hex}} className={styles.hex_container}></div>
  )
}

export default HexCircle
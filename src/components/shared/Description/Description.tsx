import styles from './Description.module.css'

type DescriptionProps = {
    text: string
}

const Description = ({text}: DescriptionProps) => {
  return (
    <div className={styles.description_text}>
        <p>{text}</p>
    </div>
  )
}

export default Description
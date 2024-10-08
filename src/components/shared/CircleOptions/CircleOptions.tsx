import { ReactNode, useEffect, useState, useCallback } from "react"
import styles from './CircleOptions.module.css'

type CircleOprionsProps = {
    children: ReactNode
}
const CircleOptions = ({children}: CircleOprionsProps) => {
  const [isShowing, toggle] = useState(false)

  const clickDotHandler = () => {
    toggle(!isShowing)
  }

  const onKeyUpHandler = useCallback((e: KeyboardEvent) => {
    if (e.key == 'Escape' && isShowing) {
        toggle(!isShowing)
    }
  }, [isShowing])

  useEffect(() => {
    document.addEventListener('keyup', onKeyUpHandler)
    return () => {
        document.removeEventListener('keyup', onKeyUpHandler)
    }
  }, [onKeyUpHandler])

  return (
    <div className={styles.container}>
        <div className={styles.dots} onClick={clickDotHandler}>
            <span className={styles.dot}></span>
            <span className={styles.dot}></span>
            <span className={styles.dot}></span>
        </div>
        {isShowing && 
            <div className={styles.modal_content}>
                {children}
            </div>
        }
    </div>
  )
}

export default CircleOptions
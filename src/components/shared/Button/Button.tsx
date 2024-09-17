import React, { useEffect, useRef } from 'react'
import styles from './Button.module.css'

type ButtonProps = {
    color: 'purple' | 'white',
    title: string,
    onClickHandler: VoidFunction
}

const Button = ({color, title, onClickHandler}: ButtonProps) => {
  const buttonRef = useRef(null)

  useEffect(() => {
    if (buttonRef.current) {
        const buttonElement: HTMLButtonElement = buttonRef.current
        buttonElement.classList.add(`${styles[`button_bg_${color}`]}`)
    }
  }, [buttonRef])

  return (
    <button className={styles.button} ref={buttonRef} onClick={onClickHandler}>{title}</button>
  )
}

export default Button
import { ReactNode, useCallback, useEffect } from 'react'
import styles from './Modal.module.css'

type ModalProps = {
    children: ReactNode,
    closeModal: Function
}

const Modal = ({children, closeModal}: ModalProps) => {

  useEffect(() => {
    document.addEventListener('keyup', onKeyUpHandler)
    return () => {
        document.removeEventListener('keyup', onKeyUpHandler)
    }
  }, [])

  const onKeyUpHandler = useCallback((e: KeyboardEvent) => {
    if (e.key == 'Escape') {
        closeModal()
    }
  }, [])

  return (
    <>
      <div className={styles.modal_container}>
          <div className={styles.modal_content}>
              {children}
          </div>
      </div>
    </>
  )
}

export default Modal
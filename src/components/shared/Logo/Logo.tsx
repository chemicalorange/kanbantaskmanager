import { useNavigate } from 'react-router-dom'
import { RoutesEnum } from '../../../routes/routes'

import LogoIcon from '../../../assets/svg/logo-light.svg?react'
import styles from './Logo.module.css'

export const Logo = () => {
  const navigate = useNavigate()
  
  const onClickHandler = () => {
    navigate(RoutesEnum.HOME)
  }
  
  return (
    <div className={styles.logo_container} onClick={onClickHandler}>
        <LogoIcon />
    </div>
  )
}

export default Logo
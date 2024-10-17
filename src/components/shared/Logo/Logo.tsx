import { useNavigate } from 'react-router-dom'
import { RoutesEnum } from '../../../routes/routes'

import LogoIconLight from '../../../assets/svg/logo-light.svg?react'
import LogoIconDark from '../../../assets/svg/logo-dark.svg?react'
import styles from './Logo.module.css'
import { useAppSelector } from '../../../store/hooks'

export const Logo = () => {
  const navigate = useNavigate()

  const colorSchema = useAppSelector(state => state.appSlice.colorSchema)
  
  const onClickHandler = () => {
    navigate(RoutesEnum.HOME)
  }
  
  return (
    <div className={styles.logo_container} onClick={onClickHandler}>
       {colorSchema === 'black' ? <LogoIconLight /> : <LogoIconDark /> }
    </div>
  )
}

export default Logo
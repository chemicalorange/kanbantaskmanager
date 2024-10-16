import styles from './ThemeSwitcher.module.css'

import DarkThemeIcon from '../../../assets/svg/icon-dark-theme.svg?react'
import LightThemeIcon from '../../../assets/svg/icon-light-theme.svg?react'
import Switch from '../../shared/Switch/Switch'
import { useEffect, useState } from 'react'
import { useAppDispatch } from '../../../store/hooks'
import { setColorSchema } from '../../../store/slices/appSlice'

const ThemeSwitcher = () => {

  const [checked, setChecked] = useState(false)

  const dispatch = useAppDispatch()

  useEffect(() => {
    checked ? dispatch(setColorSchema({colorSchema: 'white'})) : dispatch(setColorSchema({colorSchema: 'black'}))
  }, [checked])

  return (
    <div className={styles.theme_switcher_container}>
        <div className={styles.theme_switcher}>
            <LightThemeIcon className={styles.icon} />
            <Switch isOn={checked} handleToggle={() => setChecked(!checked)} />
            <DarkThemeIcon className={styles.icon} />
        </div>
    </div>
  )
}

export default ThemeSwitcher
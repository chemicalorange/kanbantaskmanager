import styles from './ThemeSwitcher.module.css'

import DarkThemeIcon from '../../../assets/svg/icon-dark-theme.svg?react'
import LightThemeIcon from '../../../assets/svg/icon-light-theme.svg?react'

const ThemeSwitcher = () => {
  return (
    <div className={styles.theme_switcher_container}>
        <div>
            <LightThemeIcon />

            <DarkThemeIcon />
        </div>
    </div>
  )
}

export default ThemeSwitcher
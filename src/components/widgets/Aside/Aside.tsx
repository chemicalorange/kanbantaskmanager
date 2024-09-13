import { Logo } from '../../shared/Logo'
import BoardsList from '../../shared/BoardsList/BoardsList'
import UppercaseCounter from '../../shared/UppercaseCounter/UppercaseCounter'
import { useAppSelector } from '../../../store/hooks'
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher'
import styles from './Aside.module.css'

const Aside = () => {
  const boards = useAppSelector(state => state.appSlice.boards)
  return (
    <aside className={styles.aside} >
        <div>
            <Logo />
            <UppercaseCounter count={boards.length} title='all boards' />
            <BoardsList />
        </div>
        <ThemeSwitcher />
    </aside>
  )
}

export default Aside
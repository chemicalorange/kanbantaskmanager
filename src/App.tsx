import { Routes, Route } from 'react-router-dom'
import { RoutesEnum } from './routes/routes'
import styles from './App.module.css'

import Aside from './components/widgets/Aside/Aside'
import Header from './components/widgets/Header/Header'
import Board from './components/widgets/Board/Board'
import { useEffect } from 'react'
import { useAppSelector } from './store/hooks'

function App() {

  const colorSchema = useAppSelector(state => state.appSlice.colorSchema)

  useEffect(() => {
    const body = document.querySelector('body')

    if (colorSchema === 'black') {
      body?.classList.remove('light-theme')
      body?.classList.add('dark-theme')  
    } else {
      body?.classList.remove('dark-theme')
      body?.classList.add('light-theme')  
    }
  }, [colorSchema])

  return (
    <div className={styles.app_container}>
      <Aside />
      <div className={styles.app_content}>
        <Header />
        <Routes>
          <Route path={RoutesEnum.HOME} element={<>home</>} />
          <Route path={`/:boardId`} element={<Board/> } />
        </Routes>
      </div>
    </div>
  )
}

export default App

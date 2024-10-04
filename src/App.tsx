import { Routes, Route } from 'react-router-dom'
import { RoutesEnum } from './routes/routes'
import styles from './App.module.css'

import Aside from './components/widgets/Aside/Aside'
import Header from './components/widgets/Header/Header'
import Board from './components/widgets/Board/Board'

function App() {

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

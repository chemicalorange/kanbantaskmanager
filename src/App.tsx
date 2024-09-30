import { Routes, Route } from 'react-router-dom'
import { RoutesEnum } from './routes/routes'
import './App.css'

import Aside from './components/widgets/Aside/Aside'
import Board from './components/widgets/Board/Board'

function App() {

  return (
    <>
      <Routes>
        <Route path={RoutesEnum.HOME} element={<>home</>} />
        <Route path={`/:boardId`} element={<div style={{display: 'flex'}}>
          <Aside />
          <Board /> 
        </div>} />
      </Routes>
    </>
  )
}

export default App

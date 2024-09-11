import { Routes, Route } from 'react-router-dom'
import { RoutesEnum } from './routes/routes'
import './App.css'

function App() {

  return (
    <Routes>
      <Route path={RoutesEnum.HOME} element={<>home</>} />
      <Route path={RoutesEnum.BOARD} element={<>board</>} />
    </Routes>
  )
}

export default App

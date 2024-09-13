import { Routes, Route } from 'react-router-dom'
import { RoutesEnum } from './routes/routes'
import './App.css'

import Aside from './components/widgets/Aside/Aside'

function App() {

  return (
    <>
      <Routes>
        <Route path={RoutesEnum.HOME} element={<>home</>} />
        <Route path={`/:boardId`} element={<Aside />} />
      </Routes>
    </>
  )
}

export default App

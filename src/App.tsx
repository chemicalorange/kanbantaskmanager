import { Routes, Route } from 'react-router-dom'
import { RoutesEnum } from './routes/routes'
import './App.css'

import CreateBoardModal from './modals/CreateBoardModal/CreateBoardModal'

import useModal from './hooks/useModal'
import { useEffect } from 'react'

function App() {

  const [isShowingModal, toggleModal] = useModal()

  useEffect(() => {
    toggleModal()
  }, [])

  return (
    <>
      <Routes>
        <Route path={RoutesEnum.HOME} element={<>home</>} />
        <Route path={`/:boardId`} element={<> 
          {isShowingModal && <CreateBoardModal closeModal={toggleModal} /> }
        </>} />
      </Routes>
    </>
  )
}

export default App

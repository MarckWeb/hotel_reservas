import './App.css'
import { useVisibility } from './hook/useVisibility'
import { useEffect } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { useToggleMenu } from './hook/useToggleMenu'
import { useAuthContext } from './context/auth-context'

import Header from './layout/Header'
import Home from './page/Home'
import Form from './layout/Form'
import Reservas from './page/Reservas'
import Servicios from './page/Servicios'
import FormReserva from './page/FormReserva'
import Profile from './page/Profile'

function App() {
  const { isVisible, toggleVisibility } = useVisibility()
  const { isActive, toggleActiveMenu, setIsActive } = useToggleMenu()
  const { getTokenUser, userExist } = useAuthContext()

  useEffect(() => {
    getTokenUser()
  }, [])

  return (
    <div>
      <div
        className={`w-full max-w-[1350px] h-screen m-auto font-sans ${isVisible ? 'blur-sm' : ''}  relative overflow-hidden`}
      >
        <Header
          toggleVisibility={toggleVisibility}
          toggleActiveMenu={toggleActiveMenu}
          isActive={isActive}
        />
        <Routes>
          <Route
            path="/"
            element={<Home toggleVisibility={toggleVisibility} />}
          />
          <Route
            path="/reservas"
            element={
              userExist ? (
                <Reservas setIsActive={setIsActive} />
              ) : (
                <Navigate to="/" />
              )
            }
          />
          <Route
            path="/search_reserva"
            element={userExist ? <FormReserva /> : <Navigate to="/" />}
          />
          <Route
            path="/servicios"
            element={
              userExist ? (
                <Servicios setIsActive={setIsActive} />
              ) : (
                <Navigate to="/" />
              )
            }
          />
          <Route
            path="/perfil"
            element={userExist ? <Profile /> : <Navigate to="/" />}
          />
        </Routes>
      </div>
      {isVisible && (
        <>
          <Form toggleVisibility={toggleVisibility} isVisible={isVisible} />
          <div className="w-full h-full blur-sm border bottom-2 border-red-700 absolute top-0 left-0 "></div>
        </>
      )}
    </div>
  )
}

export default App

//colocar rutas privadas
//http://localhost:5173/reserva quiero verificar si existe token

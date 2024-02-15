import './App.css'
import { useVisibility } from './hook/useVisibility'

import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'

import Header from './layout/Header'
import Home from './page/Home'
import Form from './layout/Form'
import Reservas from './page/Reservas'
import Servicios from './page/Servicios'
import FormReserva from './page/FormReserva'
import Profile from './page/Profile'
import { useToggleMenu } from './hook/useToggleMenu'

function App() {
   const [user, setUser] = useState(null)
   const { isVisible, toggleVisibility } = useVisibility()
   const { isActive, toggleActiveMenu, setIsActive } = useToggleMenu()
   console.log(isActive)

   useEffect(() => {
      const loggedUserJSON = window.localStorage.getItem('tokenUser')
      if (loggedUserJSON) {
         const user = JSON.parse(loggedUserJSON)
         setUser(user)

         // noteService.setToken(user.token)
      }
      //CERRAR SESION
      //window.localStorage.removeItem('loggedNoteappUser')
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

            {!user ? (
               <Home toggleVisibility={toggleVisibility} />
            ) : (
               <div className="">
                  <Routes>
                     <Route
                        path="/reservas"
                        element={<Reservas setIsActive={setIsActive} />}
                     />
                     <Route path="/search_reserva" element={<FormReserva />} />
                     <Route
                        path="/servicios"
                        element={<Servicios setIsActive={setIsActive} />}
                     />

                     <Route path="/perfil" element={<Profile />} />
                  </Routes>
               </div>
            )}
         </div>
         {isVisible && (
            <>
               <Form toggleVisibility={toggleVisibility} />
               <div className="w-full h-full blur-sm border bottom-2 border-red-700 absolute top-0 left-0 "></div>
            </>
         )}
      </div>
   )
}

export default App

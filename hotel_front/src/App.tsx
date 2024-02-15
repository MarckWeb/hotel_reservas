import './App.css'
import { useVisibility } from './hook/useVisibility'

import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'

import Header from './layout/Header'
import Home from './page/Home'
import Form from './layout/Form'
import Reservas from './page/Reservas'
import Servicios from './page/Servicios'
import Aside from './layout/Aside'
import FormReserva from './page/FormReserva'
import Profile from './page/Profile'

function App() {
   const [user, setUser] = useState(null)
   const { isVisible, toggleVisibility } = useVisibility()

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
            <Header toggleVisibility={toggleVisibility} />

            {!user ? (
               <Home toggleVisibility={toggleVisibility} />
            ) : (
               <div className="">
                  <Routes>
                     <Route path="/reservas" element={<Reservas />} />
                     <Route path="/search_reserva" element={<FormReserva />} />
                     <Route path="/servicios" element={<Servicios />} />
                     <Route />
                     <Route path="/perfil" element={<Profile />} />
                     <Route />
                     <Route />
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

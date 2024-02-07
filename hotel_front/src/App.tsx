import './App.css'
import { useVisibility } from './hook/useVisibility'

import { useEffect, useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

import Header from './layout/Header'
import Home from './page/Home'
import Form from './layout/Form'
import Welcome from './page/Welcome'

function App() {
   const [user, setUser] = useState(null)
   const { isVisible, toggleVisibility } = useVisibility()

   useEffect(() => {
      const loggedUserJSON = window.localStorage.getItem('tokenUser')
      if (loggedUserJSON) {
         const user = JSON.parse(loggedUserJSON)
         console.log(user)
         setUser(user)

         // noteService.setToken(user.token)
      }
      //CERRAR SESION
      //window.localStorage.removeItem('loggedNoteappUser')
   }, [])
   console.log(user)

   return (
      <div>
         <div
            className={`w-full max-w-[1200px] h-screen m-auto font-sans ${isVisible ? 'blur-sm' : ''}  relative border-4  border-orange-900`}
         >
            <Header toggleVisibility={toggleVisibility} />
            {/* <Routes>
               <Route
                  path="/"
                  element={<Home toggleVisibility={toggleVisibility} />}
               />
               {user && <Route path="/reservas" element={<Reservas />} />}
            </Routes> */}
            {user ? <Welcome /> : <Home toggleVisibility={toggleVisibility} />}
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

//cuando no esta activado ubicacion se queda en cargando, verificar

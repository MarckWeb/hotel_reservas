import './App.css'
import { useVisibility } from './hook/useVisibility'

import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'

import Header from './layout/Header'
import Home from './page/Home'
import Form from './layout/Form'
import Navbar from './layout/Navbar'
import Reservas from './page/Reservas'
import Servicios from './page/Servicios'

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

            {!user ? (
               <Home toggleVisibility={toggleVisibility} />
            ) : (
               <div className="flex flex-row">
                  <Navbar />

                  <Routes>
                     <Route path="reservas" element={<Reservas />} />
                     <Route path="servicios" element={<Servicios />} />
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

//cuando no esta activado ubicacion se queda en cargando, verificar

//colocar un aside y dentro de el navbar
//colocar un pading al aside para que se mantenga el tamano y de ahi salga un absolute del nav
//desde el nav saldra el titulo de la pestaña, igual con un absolute
//el icon estara en z.index mayor dentro de del aside

import './App.css'
import Header from './layout/Header'
import Home from './page/Home'
import Form from './layout/Form'
import { useVisibility } from './hook/useVisibility'
import { useState } from 'react'

function App() {
   //const [isVisible, setIsVisible] = useState<boolean>(false)
   const { isVisible, toggleVisibility } = useVisibility()

   return (
      <div>
         <div
            className={`w-full max-w-[1200px] h-screen m-auto font-sans ${isVisible ? 'blur-sm' : ''}  relative`}
         >
            <Header toggleVisibility={toggleVisibility} />

            <Home toggleVisibility={toggleVisibility} />
         </div>
         {isVisible && (
            <>
               <Form />
               <div className="w-full h-full blur-sm border bottom-2 border-red-700 absolute top-0 left-0 "></div>
            </>
         )}
      </div>
   )
}

export default App

//cuando no esta activado ubicacion se queda en cargando, verificar

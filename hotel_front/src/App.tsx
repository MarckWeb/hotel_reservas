import { useState } from 'react'
import './App.css'
import Header from './layout/Header'
import Home from './page/Home'
import Form from './layout/Form'


function App() {
  const [activeBlur, setActiveBlur] = useState(false)
  return (

    <div>
      <div className={`w-full max-w-[1200px] h-screen m-auto font-sans ${activeBlur ? 'blur-sm' : ''}  relative`} >
        <Header />
        <Home />

      </div>
      {activeBlur && <>
        <Form />
        <div className='w-full h-full blur-sm border bottom-2 border-red-700 absolute top-0 left-0 ' ></div>
      </>}
    </div>
  )
}

export default App

//cuando no esta activado ubicacion se queda en cargando, verificar

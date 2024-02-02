
import { useState } from 'react'
import './App.css'
import Header from './layout/Header'
import Home from './page/Home'


function App() {
  const [blur, setBlur] = useState<Boolean>(false)

  return (

    <div className={`w-full max-w-[1200px] h-screen m-auto font-sans ${blur ? 'blur-sm' : ''} `} >

      <Header
        setBlur={setBlur}
        blur={blur} />
      <Home />

      <div className='w-full h-full' ></div>
    </div>
  )
}

export default App

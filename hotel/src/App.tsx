import './App.css'
import Header from './layout/Header'
import Home from './page/Home'


function App() {

  return (

    <div className='w-full max-w-[1200px] h-screen m-auto overflow-hidden' >
      <Header />
      <Home />

      <div className='hola'></div>
    </div>
  )
}

export default App

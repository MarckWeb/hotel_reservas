import { Route, Routes } from 'react-router-dom'
import Navbar from '../layout/Navbar'
import Reservas from './Reservas'
import Servicios from './Servicios'

const Welcome = () => {
   return (
      <section className="h-full flex ">
         <Navbar />
         <div className="w-full h-full bg-orange-400">
            <Routes>
               <Route path="reservas" element={<Reservas />} />
               <Route path="servicios" element={<Servicios />} />
               <Route />
               <Route />
            </Routes>
         </div>
      </section>
   )
}

export default Welcome

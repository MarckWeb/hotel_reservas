import { Link } from 'react-router-dom'

import { CiMenuFries } from 'react-icons/ci'
import Enlace from '../components/Enlace'

const Navbar = () => {
   return (
      <nav className="h-screen bg-[#1F1F1F] text-white relative ">
         <div className="text-3xl p-2">
            <CiMenuFries />
         </div>
         <div className="bg-[#1F1F1F] absolute w-52 h-full">
            <div className="w-full h-6 bg-[#151515] border-y-2 border-backgroun-title "></div>
            <ul className=" flex flex-col font-light">
               <Enlace url="inicio" value="Inicio" />
               <Enlace url="reservas" value="Reservas" />
               <Enlace url="servicios" value="Servicios" />
               <Enlace url="opiniones" value="Opiniones de clientes" />
               <Enlace url="informacion" value="Informacion hotel" />
               <Enlace url="perfil" value="Mi perfil" />
            </ul>
         </div>
      </nav>
   )
}

export default Navbar

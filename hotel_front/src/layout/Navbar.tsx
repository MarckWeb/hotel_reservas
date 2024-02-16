import Enlace from '../components/Enlace'
import { ToggleActive } from '../types/toggle'

const Navbar = ({ isActive }: ToggleActive) => {
   return (
      <nav
         className={`bg-[#1F1F1F] absolute w-52 h-screen ${isActive ? 'hidden' : ''} z-10`}
      >
         <div className="w-full h-12 bg-[#1F1F1F]"></div>
         <div className="w-full h-6 bg-[#151515] border-y-[1px] border-backgroun-title "></div>
         <ul className=" flex flex-col font-light">
            <Enlace url="/" value="Inicio" />
            <Enlace url="/reservas" value="Reservas" />
            <Enlace url="/servicios" value="Servicios" />
            <Enlace url="/opiniones" value="Opiniones de clientes" />
            <Enlace url="/informacion" value="Informacion hotel" />
            <Enlace url="/perfil" value="Mi perfil" />
         </ul>
      </nav>
   )
}

export default Navbar

import Enlace from '../components/Enlace'
import Menu from '../components/Menu'
import { ToggleActive } from '../types/toggle'

const Navbar = ({ isActive, toggleActiveMenu }: ToggleActive) => {
  return (
    <section className="w-14 h-11 bg-[#1F1F1F] text-white absolute top-[110%] left-0 z-10">
      <Menu isActive={isActive} toggleActiveMenu={toggleActiveMenu} />
      <nav
        className={`bg-[#1F1F1F] absolute w-52 h-screen ${isActive ? 'translate-x-[-100%] transition-all ease-linear duration-200' : 'translate-x-0 transition-all ease-linear duration-200'} z-10`}
        onClick={toggleActiveMenu}
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
    </section>
  )
}

export default Navbar

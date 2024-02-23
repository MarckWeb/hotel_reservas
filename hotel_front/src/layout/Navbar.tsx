import React, { useState } from 'react'
import Enlace from '../components/Enlace'
import Menu from '../components/Menu'
import { ToggleActive } from '../types/toggle'

const Navbar: React.FC<ToggleActive> = ({ isActive, toggleActiveMenu }) => {
  const [currentPage, setCurrentPage] = useState<string>('')

  const showResultOfNavigate = (value: string) => {
    setCurrentPage(value)
  }
  return (
    <section className="w-14 h-11 bg-[#1F1F1F] text-white absolute top-[110%] left-0 z-10">
      <Menu
        isActive={isActive}
        toggleActiveMenu={toggleActiveMenu}
        currentPage={currentPage}
      />
      <nav
        className={`bg-[#1F1F1F] absolute w-52 h-screen ${isActive ? 'hidden' : ''} z-10`}
        onClick={toggleActiveMenu}
      >
        <div className="w-full h-12 bg-[#1F1F1F]"></div>
        <div className="w-full h-6 bg-[#151515] border-y-[1px] border-backgroun-title "></div>
        <ul className=" flex flex-col font-light">
          <Enlace
            url="/"
            value="Inicio"
            onClick={() => showResultOfNavigate('Resultado de la busqueda')}
          />
          <Enlace
            url="/reservas"
            value="Reservas"
            onClick={() => showResultOfNavigate('Reservas')}
          />
          <Enlace
            url="/servicios"
            value="Servicios"
            onClick={() => showResultOfNavigate('Servicios')}
          />
          <Enlace
            url="/opiniones"
            value="Opiniones de clientes"
            onClick={() => showResultOfNavigate('Opiniones de Clientes')}
          />
          <Enlace
            url="/informacion"
            value="Informacion hotel"
            onClick={() => showResultOfNavigate('Informacion del Hotel')}
          />
          <Enlace
            url="/perfil"
            value="Mi perfil"
            onClick={() => showResultOfNavigate('Mi perfil')}
          />
        </ul>
      </nav>
    </section>
  )
}

export default Navbar

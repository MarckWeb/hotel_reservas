import React, { useState } from 'react'
import Enlace from '../components/Enlace'
import Menu from '../components/Menu'
import { ToggleActive } from '../types/toggle'

import { IoHome } from 'react-icons/io5'
import { FaCalendarCheck } from 'react-icons/fa'
import { BiSolidFoodMenu } from 'react-icons/bi'
import { IoMdChatbubbles } from 'react-icons/io'
import { RiFolderInfoFill } from 'react-icons/ri'
import { RiProfileFill } from 'react-icons/ri'
import { SiHomeassistantcommunitystore } from 'react-icons/si'

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
            icon={<IoHome className="text-background-second text-lg" />}
          />
          <Enlace
            url="/reservas"
            value="Reservas"
            onClick={() => showResultOfNavigate('Reservas')}
            icon={
              <FaCalendarCheck className="text-background-second text-lg" />
            }
          />
          <Enlace
            url="/servicios"
            value="Servicios"
            onClick={() => showResultOfNavigate('Servicios')}
            icon={
              <BiSolidFoodMenu className="text-background-second text-lg" />
            }
          />

          <Enlace
            url="/"
            value="Opiniones de clientes"
            onClick={() => showResultOfNavigate('Opiniones de Clientes')}
            icon={
              <IoMdChatbubbles className="text-background-second text-lg" />
            }
          />
          <Enlace
            url="/info"
            value="Informacion hotel"
            onClick={() => showResultOfNavigate('Informacion del Hotel')}
            icon={
              <RiFolderInfoFill className="text-background-second text-lg" />
            }
          />

          <Enlace
            url="/business"
            value="Negocios Cercanos"
            onClick={() => showResultOfNavigate('Negocios Cercanos al hotel')}
            icon={
              <SiHomeassistantcommunitystore className="text-background-second text-lg" />
            }
          />

          <Enlace
            url="/perfil"
            value="Mi perfil"
            onClick={() => showResultOfNavigate('Mi perfil')}
            icon={<RiProfileFill className="text-background-second text-lg" />}
          />
        </ul>
      </nav>
    </section>
  )
}

export default Navbar

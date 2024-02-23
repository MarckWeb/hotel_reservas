import { CiMenuFries } from 'react-icons/ci'
import { ToggleActive } from '../types/toggle'

interface MenuProps extends ToggleActive {
  currentPage: string
}

const Menu = ({ isActive, toggleActiveMenu, currentPage }: MenuProps) => {
  return (
    <div
      className={`text-3xl p-2 absolute z-20 ${isActive ? 'w-[50px]' : 'w-52'}`}
    >
      <CiMenuFries onClick={toggleActiveMenu} />
      <div
        className={`text-lg absolute top-0 left-[100%] bg-gradient-to-l from-transparent to-backgroun-title border-l-8 border-background-second font-extralight w-[250px] p-2 `}
      >
        {currentPage || 'Resultado de la busqueda'}
      </div>
    </div>
  )
}

export default Menu

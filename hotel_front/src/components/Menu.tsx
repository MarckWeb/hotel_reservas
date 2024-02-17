import { CiMenuFries } from 'react-icons/ci'
import { ToggleActive } from '../types/toggle'

const Menu = ({ isActive, toggleActiveMenu }: ToggleActive) => {
  return (
    <div
      className={`text-3xl p-2 absolute z-20 ${isActive ? 'w-52' : 'w-[50px]'}`}
    >
      <CiMenuFries onClick={toggleActiveMenu} />
      <div className="text-lg absolute top-0 left-[100%] bg-gradient-to-l from-transparent to-backgroun-title border-l-8 border-background-second font-extralight w-[250px] p-2">
        Resultado de la busqueda
      </div>
    </div>
  )
}

export default Menu

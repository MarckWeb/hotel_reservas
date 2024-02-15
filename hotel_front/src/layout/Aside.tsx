import { CiMenuFries } from 'react-icons/ci'
import Navbar from './Navbar'
import { ToggleActive } from '../types/toggle'

const Aside = ({ isActive, toggleActiveMenu }: ToggleActive) => {
   return (
      <aside className="w-14 h-11 bg-[#1F1F1F] text-white absolute top-[110%] left-0 z-10">
         <div
            className={`text-3xl p-2 absolute z-20 ${isActive ? 'w-[50px]' : 'w-52'}`}
         >
            <CiMenuFries onClick={toggleActiveMenu} />
            <div className="text-lg absolute top-0 left-[100%] bg-gradient-to-l from-transparent to-backgroun-title border-l-8 border-background-second font-extralight w-[250px] p-2">
               Resultado de la busqueda
            </div>
         </div>
         <Navbar isActive={isActive} />
      </aside>
   )
}

export default Aside

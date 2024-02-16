import Clock from '../components/Clock'
import { FaUser } from 'react-icons/fa6'
import Weather from '../components/Weather'
import { ToggleActive } from '../types/toggle'
import Aside from './Aside'
import { useLocation } from 'react-router-dom'

const Header = ({
   toggleVisibility,
   toggleActiveMenu,
   isActive,
}: ToggleActive) => {
   const location = useLocation()
   const isHomePage = location.pathname === '/'
   return (
      <header className="bg-black flex flex-row justify-between py-1 md:py-2 px-2 md:px-4 relative">
         <div className="flex flex-col items-end">
            <h2 className="text-white text-2xl font-extrabold">GRANDHOTEL</h2>
            <span className="text-background-second text-[10px] font-bold">
               GRANDHOTEL BERLIN
            </span>
         </div>

         <section className="text-color-text-second flex flex-col items-end">
            <Clock />
            <div className="flex gap-5">
               <p
                  className="flex flex-row items-center gap-1 text-sm font-extralight cursor-pointer"
                  onClick={toggleVisibility}
               >
                  <FaUser />
                  Registro
               </p>
               <Weather />
            </div>
         </section>

         {!isHomePage && (
            <Aside isActive={isActive} toggleActiveMenu={toggleActiveMenu} />
         )}
      </header>
   )
}

export default Header

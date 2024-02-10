import { CiMenuFries } from 'react-icons/ci'
import Navbar from './Navbar'
import { useState } from 'react'

const Aside = () => {
   const [menuTraslate, setMenuTraslate] = useState(false)
   return (
      <aside className="w-14 h-screen bg-[#1F1F1F] text-white relative ">
         <div
            className={`text-3xl p-2 absolute z-10 ${menuTraslate ? 'w-[50px]' : 'w-52'}`}
         >
            <CiMenuFries onClick={() => setMenuTraslate(!menuTraslate)} />
            <div className="text-lg absolute top-2 left-[100%] bg-gradient-to-l from-transparent to-backgroun-title border-l-8 border-background-second font-extralight w-[250px] p-2">
               Resultado de la busqueda
            </div>
         </div>
         <Navbar menuTraslate={menuTraslate} />
      </aside>
   )
}

export default Aside

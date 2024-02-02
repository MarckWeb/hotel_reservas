import Clock from "../components/Clock"
import { FaUser } from "react-icons/fa6";
import Weather from "../components/Weather";



const Header = () => {
   return (
      <header className="bg-black flex flex-row justify-between py-1 px-2">
         <div className="flex flex-col items-end">
            <h2 className="text-white text-2xl font-bold">GRANDHOTEL</h2>
            <span className="text-background-second text-[10px] font-bold">GRANDHOTEL BERLIN</span>
         </div>

         <section className="text-color-text-second flex flex-col items-end">
            <Clock />
            <div className="flex gap-4">
               <p className="flex flex-row items-center gap-1 font-extralight">
                  <FaUser />
                  Registro</p>
               <Weather />
            </div>
         </section>

      </header>
   )
}

export default Header

import Clock from "../components/Clock"
import { FaUser } from "react-icons/fa6";
import Weather from "../components/Weather";
interface Blur {
   setBlur: () => void;
   blur: boolean
}


const Header: React.FC<Blur> = ({ setBlur, blur }) => {
   return (
      <header className="bg-black flex flex-row justify-between py-1 md:py-2 px-2 md:px-4">
         <div className="flex flex-col items-end">
            <h2 className="text-white text-2xl font-extrabold">GRANDHOTEL</h2>
            <span className="text-background-second text-[10px] font-bold">GRANDHOTEL BERLIN</span>
         </div>

         <section className="text-color-text-second flex flex-col items-end">
            <Clock />
            <div className="flex gap-5">
               <p className="flex flex-row items-center gap-1 text-sm font-extralight cursor-pointer"
                  onClick={() => setBlur(!blur)}>
                  <FaUser />
                  Registro
               </p>
               <Weather />
            </div>
         </section>

      </header>
   )
}

export default Header

import Clock from "../components/Clock"


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
               <p>registro</p>
               <p>tiempo</p>
            </div>
         </section>

      </header>
   )
}

export default Header

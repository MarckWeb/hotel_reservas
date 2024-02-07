import { Link } from 'react-router-dom'

import { CiMenuFries } from 'react-icons/ci'

const Navbar = () => {
   return (
      <nav className="w-12 h-full bg-background-primary border-2 border-background-primary">
         <CiMenuFries />
         <ul>
            <li>
               <Link to="reservas">Reservas</Link>
            </li>
            <li>
               <Link to="servicios">servicios</Link>
            </li>
         </ul>
      </nav>
   )
}

export default Navbar

import { Link } from 'react-router-dom'

interface Links {
   url: string
   value: string
}

const Enlace = ({ url, value }: Links) => {
   return (
      <li className="pl-4 py-2 border-b-4 border-backgroun-title border-l-[10px] border-[#151515] bg-[#1F1F1F]">
         <Link to={url}>{value}</Link>
      </li>
   )
}

export default Enlace

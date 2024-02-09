import { Link } from 'react-router-dom'

interface Links {
   url: string
   value: string
}

const Enlace = ({ url, value }: Links) => {
   return (
      <li className="pl-4 py-1 border-b-2 border-backgroun-title ">
         <Link to={url}>{value}</Link>
      </li>
   )
}

export default Enlace

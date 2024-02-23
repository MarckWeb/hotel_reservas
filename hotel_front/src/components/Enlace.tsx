import { Link } from 'react-router-dom'

interface Links {
  url: string
  value: string
  onClick: () => void
}

const Enlace: React.FC<Links> = ({ url, value, onClick }) => {
  return (
    <li
      className="border-b-4 border-backgroun-title border-l-[10px] border-[#151515] bg-[#1F1F1F]"
      onClick={onClick}
    >
      <Link
        className="pl-4 py-2 block w-full h-full hover:text-background-second"
        to={url}
      >
        {value}
      </Link>
    </li>
  )
}

export default Enlace

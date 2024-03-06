import { Link } from 'react-router-dom'

import { IconBaseProps } from 'react-icons'

interface Links {
  url: string
  value: string
  onClick: () => void
  icon: React.ReactElement<IconBaseProps>
}

const Enlace: React.FC<Links> = ({ url, value, onClick, icon }) => {
  return (
    <li
      className="border-b-4 border-backgroun-title border-l-[10px] border-[#151515] bg-[#1F1F1F] flex flex-row items-center p-1 hover:bg-backgroun-title"
      onClick={onClick}
    >
      {icon}
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

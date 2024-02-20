import { IconBaseProps } from 'react-icons'
interface IconService {
  icon: React.ReactElement<IconBaseProps>
}

const ComplementService = ({ icon }: IconService) => {
  return (
    <div className="w-8 h-5 bg-background-second relative">
      <span className="w-8 border-b-[10px] border-background-second border-l-[16px] border-l-transparent border-r-[16px] border-r-transparent absolute bottom-[100%] left-0"></span>
      <span className="w-8 border-b-[10px] border-background-second border-l-[16px] border-l-transparent border-r-[16px] border-r-transparent absolute top-[100%] left-0 transform rotate-180"></span>
      {icon}
    </div>
  )
}

export default ComplementService

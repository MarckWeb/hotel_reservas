interface ProfileActivity {
  icon: React.ReactNode
  name: string
  ranks?: number
  onClick?: () => void
}

const ConfigProfile: React.FC<ProfileActivity> = ({
  icon,
  name,
  ranks,
  onClick,
}) => {
  return (
    <li
      className="flex flex-col items-center border border-white rounded-md p-2 bg-background-primary cursor-pointer"
      onClick={onClick}
    >
      <span className="text-background-second">{icon}</span>
      <span className="font-extralight text-color-text-second">{name}</span>
      <span className="text-color-text-second">{ranks}</span>
    </li>
  )
}

export default ConfigProfile

interface ProfileActivity {
  icon: React.ReactNode
  name: string
  ranks?: number
}

const ProfileActivity: React.FC<ProfileActivity> = ({ icon, name, ranks }) => {
  return (
    <li className="flex flex-col items-center border border-white rounded-md p-2">
      <span className="text-background-second">{icon}</span>
      <span className="font-extralight text-color-text-second">{name}</span>
      <span className="text-color-text-second">{ranks}</span>
    </li>
  )
}

export default ProfileActivity

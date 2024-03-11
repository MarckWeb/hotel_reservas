interface ProfileActivity {
  icon: React.ReactNode
  name: string
  ranks?: number
}

const ProfileActivity: React.FC<ProfileActivity> = ({ icon, name, ranks }) => {
  return (
    <li className="flex flex-col justify-center items-center bg-black  p-2 w-28 border-l first:border-none">
      <span className="text-background-second">{icon}</span>
      <span className="font-extralight text-color-text-second">{name}</span>
      <span className="text-color-text-second">{ranks}</span>
    </li>
  )
}

export default ProfileActivity

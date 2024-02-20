import { FaEye } from 'react-icons/fa'
import { FaRankingStar } from 'react-icons/fa6'
import { FaCommentDots } from 'react-icons/fa'
import { FaRegCircleUser } from 'react-icons/fa6'
import { SlOptionsVertical } from 'react-icons/sl'
import { FaExchangeAlt } from 'react-icons/fa'
import ProfileActivity from '../components/ProfileActivity'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../app/store'
import { useEffect } from 'react'
import { getUserLogin } from '../reducer/user/user'
import { useAuthContext } from '../context/auth-context'

const Profile = () => {
  const { userExist } = useAuthContext()
  const disptach = useDispatch<AppDispatch>()
  const user = useSelector((state: RootState) => state.user)

  useEffect(() => {
    disptach(getUserLogin(userExist?.user ?? ''))
  }, [disptach])
  return (
    <section className="w-full h-screen bg-perfil-background overflow-hidden grid">
      <article className="m-auto w-full max-w-[600px] bg-gradient-to-b from-zinc-900 via-zinc-700 to-zinc-900 rounded-lg mt-20 pb-5">
        <h2 className="bg-black text-color-text-second text-lg md:rounded-t-lg py-2 px-4">
          Mi Perfil
        </h2>
        <div className="w-full h-[100px] bg-wallpaper bg-top bg-cover relative">
          <figure className="w-[100px] h-[100px] border-2 border-white rounded-[50%] absolute top-2 left-2">
            <img
              className="w-full h-full rounded-[50%]"
              src={user[0]?.photo}
              alt=""
            />
          </figure>
        </div>
        <h3 className="text-center font-bold text-xl md:text-3xl text-white">
          {user[0]?.name}
        </h3>
        <ul className="flex justify-center items-center gap-5 mt-4">
          <ProfileActivity icon={<FaEye />} name="Vistas" ranks={2} />

          <ProfileActivity icon={<FaRankingStar />} name="Puntos" ranks={2} />

          <ProfileActivity
            icon={<FaCommentDots />}
            name="Comentarios"
            ranks={10}
          />
        </ul>
        <div className="w-full h-36 border border-x-color-text-second my-3"></div>
        <ul className="flex justify-center items-center gap-5 mt-2">
          <ProfileActivity icon={<FaRegCircleUser />} name="Editar Perfil" />

          <ProfileActivity icon={<SlOptionsVertical />} name="Opciones" />

          <ProfileActivity icon={<FaExchangeAlt />} name="Canjear Puntos" />
        </ul>
      </article>
    </section>
  )
}

export default Profile

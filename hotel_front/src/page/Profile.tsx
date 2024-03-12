import { FaEye } from 'react-icons/fa'
import { FaRankingStar } from 'react-icons/fa6'
import { FaCommentDots } from 'react-icons/fa'
import { FaRegCircleUser } from 'react-icons/fa6'
import { SlOptionsVertical } from 'react-icons/sl'
import { FaExchangeAlt } from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'

import ProfileActivity from '../components/ProfileActivity'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../app/store'
import { useEffect } from 'react'
import { getUserLogin } from '../reducer/user/user'
import { useAuthContext } from '../context/auth-context'
import ConfigProfile from '../components/ConfigProfile'
import { getReservation } from '../services/reservation'

const Profile = () => {
  const { userExist } = useAuthContext()
  const disptach = useDispatch<AppDispatch>()
  const user = useSelector((state: RootState) => state.user)

  useEffect(() => {
    disptach(getUserLogin(userExist?.user ?? ''))
    console.log(getReservation())
  }, [disptach])

  return (
    <section className="w-full h-screen bg-perfil-background md:overflow-hidden grid">
      <article className="m-auto w-full max-w-[600px] bg-background-cards md:border md:border-border-cards rounded-lg mt-16 md:mt-2 p-4">
        <h2 className="bg-black text-color-text-second text-lg md:rounded-t-lg py-2 px-4">
          Mi Perfil
        </h2>

        <div className="w-full h-[120px] bg-wallpaper bg-center bg-cover relative border-b-4 border-background-second">
          <div className="absolute top-[40%] left-[50%] translate-x-[-50%]  inset-0 bg-gradient-to-r from-red-500 to-yellow-500 rounded-[50%] w-[120px] h-[120px]">
            <figure className="absolute top-[50%] left-[50%] w-[110px] h-[110px] rounded-[50%] translate-x-[-50%] translate-y-[-50%] ">
              <img
                className="w-full h-full rounded-[50%]"
                src={user[0]?.photo}
                alt=""
              />
            </figure>
          </div>
        </div>
        <h3 className="text-center font-bold text-xl text-white mt-12">
          {user[0]?.name}
        </h3>
        <div className="flex flex-row justify-center items-center gap-2 my-2">
          <FaLocationDot className="text-background-second" />
          <p className="text-white font-light">Bilbao, España</p>
        </div>
        <ul className="flex flex-row justify-center items-center p-2 rounded-lg bg-black md:bg-transparent">
          <ProfileActivity icon={<FaEye />} name="Vistas" ranks={2} />

          <ProfileActivity icon={<FaRankingStar />} name="Puntos" ranks={2} />

          <ProfileActivity
            icon={<FaCommentDots />}
            name="Comentarios"
            ranks={10}
          />
        </ul>
        <div className="w-full h-44 border border-x-color-text-second my-3"></div>
        <ul className="flex justify-center items-center gap-1 md:gap-4 mt-2">
          <ConfigProfile icon={<FaRegCircleUser />} name="Editar Perfil" />

          <ConfigProfile icon={<SlOptionsVertical />} name="Opciones" />

          <ConfigProfile icon={<FaExchangeAlt />} name="Canjear Puntos" />
        </ul>
      </article>
    </section>
  )
}

export default Profile

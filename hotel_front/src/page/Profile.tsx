import { FaEye } from 'react-icons/fa'
import { FaRankingStar } from 'react-icons/fa6'
import { FaCommentDots } from 'react-icons/fa'
import { FaRegCircleUser } from 'react-icons/fa6'
import { SlOptionsVertical } from 'react-icons/sl'
import { FaLocationDot } from 'react-icons/fa6'
import { FaPrint } from 'react-icons/fa'
import { RiDeleteBin2Line } from 'react-icons/ri'

import ProfileActivity from '../components/ProfileActivity'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../app/store'
import { useEffect } from 'react'
import { getUserLogin } from '../reducer/user/user'
import ConfigProfile from '../components/ConfigProfile'
import { handleReservaClient } from '../reducer/reserva/reserva'
import { useNavigate } from 'react-router-dom'
import { useAuthContext } from '../context/auth-context'

const Profile = () => {
  const { userExist, getTokenUser } = useAuthContext()

  const disptach = useDispatch<AppDispatch>()
  const user = useSelector((state: RootState) => state.user)
  const reservation = useSelector((state: RootState) => state.reserva)
  const navigate = useNavigate()

  useEffect(() => {
    disptach(getUserLogin(userExist?.user ?? ''))
    disptach(handleReservaClient(userExist?.user ?? ''))
  }, [disptach])

  const handleSingOut = () => {
    localStorage.clear()
    getTokenUser()
    setTimeout(() => {
      navigate('/')
    }, 1000)
  }

  return (
    <section className="w-full h-screen bg-perfil-background md:overflow-hidden grid">
      <article className="m-auto w-full max-w-[600px] bg-background-cards md:border md:border-border-cards rounded-lg mt-16  md:p-4">
        <h2 className="bg-black text-color-text-second text-lg md:rounded-t-lg py-2 px-4">
          Mi Perfil
        </h2>

        <div className="w-full h-[120px] bg-wallpaper bg-center bg-cover relative border-4 rounded-t-lg border-background-second">
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
        <div className="w-full my-3 text-white ">
          <table className="w-full border-separate text-center bg-black rounded">
            <thead>
              <tr className="text-color-text-second font-light">
                <th className="bg-orange-600 rounded">Nº</th>
                <th className="bg-orange-600 rounded">Check in</th>
                <th className="bg-orange-600 rounded">Check out</th>
                <th className="bg-orange-600 rounded">tipo</th>
                <th className="bg-orange-600 rounded">Imp</th>
                <th className="bg-orange-600 rounded">Elim</th>
              </tr>
            </thead>
            <tbody>
              {reservation.length > 0 &&
                reservation.map((reserva) => {
                  return (
                    <tr key={reserva._id} className="w-full font-extralight  ">
                      <td className="bg-background-second rounded">
                        {reserva.nRoom}
                      </td>
                      <td className="bg-background-second rounded">
                        {reserva.checkIn.slice(5)}
                      </td>
                      <td className="bg-background-second rounded">
                        {reserva.checkOut.slice(5)}
                      </td>
                      <td className="bg-background-second rounded">Reserva </td>
                      <td className="p-2 bg-background-second rounded cursor-pointer hover:bg-orange-500 hover:text-color-text-second">
                        <FaPrint className="" />
                      </td>
                      <td className="p-2 bg-background-second rounded cursor-pointer hover:bg-orange-500 hover:text-color-text-second">
                        <RiDeleteBin2Line />
                      </td>
                    </tr>
                  )
                })}
              <tr className="w-full font-extralight  ">
                <td className="bg-background-second rounded">002</td>
                <td className="bg-background-second rounded">12-08</td>
                <td className="bg-background-second rounded">15-02</td>
                <td className="bg-background-second rounded">Servicio </td>
                <td className="p-2 bg-background-second rounded cursor-pointer">
                  <FaPrint />
                </td>
                <td className="p-2 bg-background-second rounded cursor-pointer">
                  <RiDeleteBin2Line />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <ul className="flex justify-center items-center gap-1 md:gap-4 mt-2">
          <ConfigProfile icon={<FaRegCircleUser />} name="Editar Perfil" />

          <ConfigProfile
            icon={<SlOptionsVertical />}
            name="Cerrar Sesión"
            onClick={handleSingOut}
          />
        </ul>
      </article>
    </section>
  )
}

export default Profile

import { FaEye } from 'react-icons/fa'
import { FaRankingStar } from 'react-icons/fa6'
import { FaCommentDots } from 'react-icons/fa'
import { FaRegCircleUser } from 'react-icons/fa6'
import { SlOptionsVertical } from 'react-icons/sl'
import { FaLocationDot } from 'react-icons/fa6'
import { FaPrint } from 'react-icons/fa'
import { RiDeleteBin2Line } from 'react-icons/ri'
import { FaImages } from 'react-icons/fa'

import ProfileActivity from '../components/ProfileActivity'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../app/store'
import React, { useEffect, useState } from 'react'
import { getUserLogin } from '../reducer/user/user'
import ConfigProfile from '../components/ConfigProfile'
import { handleReservaClient } from '../reducer/reserva/reserva'
import { useNavigate } from 'react-router-dom'
import { useAuthContext } from '../context/auth-context'
import { deleteReserva } from '../reducer/reserva/reserva'
import useLocation from '../hook/useLocation'
import { getApiWeather } from '../services/serviceWeather'
import { LocationCity } from '../types/weather'
import loginService from '../services/login'

const Profile = () => {
  const { userExist, getTokenUser } = useAuthContext()
  const [city, setCity] = useState<LocationCity>()
  const [selectedImage, setSelectedImage] = useState<string>()

  const dispatch = useDispatch<AppDispatch>()
  const { location } = useLocation()
  const user = useSelector((state: RootState) => state.user)
  const reservation = useSelector((state: RootState) => state.reserva)

  const navigate = useNavigate()

  useEffect(() => {
    const handleLocationCity = async () => {
      let currentLocation = location
      if (!currentLocation) {
        currentLocation = {
          latitude: 43.262985,
          longitude: -2.935013,
        }
      }

      const locationCity = await getApiWeather(currentLocation)
      setCity(locationCity)
    }
    handleLocationCity()
  }, [location])

  useEffect(() => {
    dispatch(getUserLogin(userExist?.user ?? ''))
    dispatch(handleReservaClient(userExist?.user ?? ''))
  }, [dispatch])

  const handleSingOut = () => {
    localStorage.clear()
    getTokenUser()
    setTimeout(() => {
      navigate('/')
    }, 1000)
  }

  const deleteReservationRoom = (id: string) => {
    dispatch(deleteReserva(id))
  }

  const handleFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    const name = e.target.name

    if (name === 'photo') {
      const imageFile = e.target.files?.[0]

      if (imageFile) {
        const imageUrl = URL.createObjectURL(imageFile)
        setSelectedImage(imageUrl)

        const formData = new FormData()
        formData.append('file', imageFile)

        try {
          await loginService.updateUser(user[0]._id, formData)
          await dispatch(getUserLogin(userExist?.user ?? ''))
        } catch (error) {
          console.error('Error al actualizar la foto del usuario:', error)
        }
      }
    }
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
              {selectedImage ? (
                <img
                  className="w-full h-full rounded-[50%]"
                  src={selectedImage}
                  alt="Profile"
                />
              ) : (
                user[0]?.photo && (
                  <img
                    className="w-full h-full rounded-[50%]"
                    src={user[0]?.photo}
                    alt="Selected Profile"
                  />
                )
              )}
            </figure>

            <h3
              className={`${selectedImage || user[0]?.photo ? 'hidden' : 'block'} text-center text-7xl p-5`}
            >
              {user[0]?.name.charAt(0)}
            </h3>

            <div className="absolute bottom-[10px] right-0 bg-backgroun-title p-1 rounded ">
              <label htmlFor="photo">
                <FaImages className="text-xl text-white cursor-pointer" />
              </label>
              <input
                className="hidden"
                type="file"
                name="photo"
                id="photo"
                onChange={handleFile}
              />
            </div>
          </div>
        </div>

        <h3 className="text-center font-bold text-xl text-white mt-12">
          {user[0]?.name}
        </h3>
        <div className="flex flex-row justify-center items-center gap-2 my-2">
          <FaLocationDot className="text-background-second" />
          <p className="text-white font-light">{`${city && city.name}, ${city && city.sys.country}`}</p>
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
                      <td
                        onClick={() =>
                          deleteReservationRoom(reservation[0]._id)
                        }
                        className="p-2 bg-background-second rounded cursor-pointer hover:bg-orange-500 hover:text-color-text-second"
                      >
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

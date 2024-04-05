import { FaEye } from 'react-icons/fa'
import { FaRankingStar } from 'react-icons/fa6'
import { FaCommentDots } from 'react-icons/fa'
import { FaRegCircleUser } from 'react-icons/fa6'
import { SlOptionsVertical } from 'react-icons/sl'
import { FaLocationDot } from 'react-icons/fa6'

import ProfileActivity from '../components/ProfileActivity'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../app/store'
import React, { useEffect, useState } from 'react'
import { getUserLogin } from '../reducer/user/user'
import ConfigProfile from '../components/ConfigProfile'
import { handleReservaClient } from '../reducer/reserva/reserva'
import { useNavigate } from 'react-router-dom'
import { useAuthContext } from '../context/auth-context'
import useLocation from '../hook/useLocation'
import { getApiWeather } from '../services/serviceWeather'
import { LocationCity } from '../types/weather'
import loginService from '../services/login'
import { handleCateringClient } from '../reducer/catering/catering'
import TableProfile from '../layout/TableProfile'
import ShowProfile from '../components/ShowProfile'

const Profile = () => {
  const { userExist, getTokenUser } = useAuthContext()
  const [city, setCity] = useState<LocationCity>()
  const [selectedImage, setSelectedImage] = useState<string>('')

  const dispatch = useDispatch<AppDispatch>()
  const { location } = useLocation()
  const user = useSelector((state: RootState) => state.user)

  const navigate = useNavigate()

  useEffect(() => {
    fetchLocationCity()
  }, [location])

  useEffect(() => {
    dispatchUserActions()
  }, [dispatch, userExist])

  useEffect(() => {
    handleCateringForUser()
  }, [dispatch, user])

  const fetchLocationCity = async () => {
    try {
      const locationCity = await getApiWeather(
        location || {
          latitude: 43.262985,
          longitude: -2.935013,
        },
      )
      setCity(locationCity)
    } catch (error) {
      console.error('Error fetching location city:', error)
    }
  }

  const dispatchUserActions = () => {
    const userId = userExist?.user ?? ''
    dispatch(getUserLogin(userId))
    dispatch(handleReservaClient(userId))
  }

  const handleCateringForUser = () => {
    const userId = user[0]?._id
    if (userId) {
      dispatch(handleCateringClient(userId))
    }
  }

  // Función para cerrar sesión
  const handleSingOut = () => {
    localStorage.clear()
    getTokenUser()
    setTimeout(() => {
      navigate('/')
    }, 1000)
  }

  // Función para manejar el archivo seleccionado del perfil
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
        <ShowProfile
          selectedImage={selectedImage}
          photoUser={user[0]?.photo}
          userName={user[0]?.name}
          handleFile={handleFile}
        />

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

        <TableProfile />

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

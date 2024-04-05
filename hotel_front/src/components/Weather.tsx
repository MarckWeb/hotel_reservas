import { useEffect, useState } from 'react'
import useLocation from '../hook/useLocation'
import { getApiWeather } from '../services/serviceWeather'
import { WetherData } from '../types/weather'

import {
  clear,
  thunderstorm,
  partly,
  rain,
  mainly,
  drizzle,
  overcast,
  sunny,
} from '../assets/weather-icons'
import BorderElememts from '../hook/BorderElememts'

const Weather: React.FC = () => {
  const [cloud, setCloud] = useState<WetherData | null>(null)
  const { location } = useLocation()

  useEffect(() => {
    const handleApiWeather = async () => {
      try {
        let currentLocation = location

        // Si la ubicación no está definida , usar coordenadas de Bilbao
        if (!currentLocation) {
          currentLocation = {
            latitude: 43.262985,
            longitude: -2.935013,
          }
        }

        const weatherData = await getApiWeather(currentLocation)
        setCloud(weatherData)
      } catch (error) {
        console.error('Error al actualizar datos de weather: Clouds', error)
      }
    }
    handleApiWeather()
  }, [location])

  //funcion para retornar los diferentes tipos de tiempo, segun se vayan dando en el dia
  const getWeatherIcon = () => {
    if (!cloud) return null

    const weatherMain = cloud.weather[0].main

    switch (weatherMain) {
      case 'Drizzle':
        return <img className="w-[50px]" src={drizzle} alt="" />
      case 'Rain':
        return <img className="w-[50px]" src={rain} alt="" />
      case 'Sunny':
        return <img className="w-[50px]" src={sunny} alt="" />
      case 'Mist':
        return <img className="w-[50px]" src={overcast} alt="" />
      case 'Thunderstorms':
        return <img className="w-[50px]" src={thunderstorm} alt="" />
      case 'Clouds':
        return <img className="w-[50px]" src={partly} alt="" />
      case 'Clear':
        return <img className="w-[50px]" src={clear} alt="" />

      default:
        return <img className="w-[50px]" src={mainly} alt="" />
    }
  }

  return (
    <div className="flex flex-col items-center">
      <BorderElememts>
        <div className="m-auto">{getWeatherIcon()}</div>
      </BorderElememts>

      {cloud ? (
        <p className="text-[12px] md:text-sm font-extralight mt-1 md:mt-3 ">
          {`${Math.round(cloud.main.temp_max)} ºC / ${Math.round((cloud.main.temp_max * 9) / 5 + 32)} ºF`}
        </p>
      ) : (
        'cargando..'
      )}
    </div>
  )
}

export default Weather

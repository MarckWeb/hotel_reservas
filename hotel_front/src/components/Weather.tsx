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

const Weather: React.FC = () => {
  const [cloud, setCloud] = useState<WetherData | null>(null)
  const { location } = useLocation()

  useEffect(() => {
    const handleApiWeather = async () => {
      try {
        if (location) {
          const weatherData = await getApiWeather(location)
          setCloud(weatherData)
        }
      } catch (error) {
        console.error('Error al actualizar datos de weather: Clouds', error)
      }
    }
    handleApiWeather()
  }, [location])

  console.log(cloud)

  const getWeatherIcon = () => {
    if (!cloud) return null

    const weatherMain = cloud.weather[0].main
    console.log(weatherMain)

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

  //https://github.com/Makin-Things/weather-icons?tab=readme-ov-file
  return (
    <div className="flex flex-col items-center">
      <div className="relative inset-0 bg-gradient-to-r from-red-500 to-yellow-500 rounded-[50%]  w-14 h-14 md:w-[80px] md:h-[80px]">
        <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]  inset-0  w-[54px] h-[54px] md:w-[75px] md:h-[75px] bg-black rounded-[50%] flex">
          <div className="m-auto">{getWeatherIcon()}</div>
        </div>
      </div>
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

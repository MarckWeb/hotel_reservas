import { useEffect, useState } from 'react'
import useLocation from '../hook/useLocation'
import { getApiWeather } from '../services/serviceWeather'
import { WetherData } from '../types/weather'

import { IoRainy } from 'react-icons/io5'
import { IoMdSunny } from 'react-icons/io'
import { IoIosCloudy } from 'react-icons/io'
import { IoThunderstormSharp } from 'react-icons/io5'
import { IoIosPartlySunny } from 'react-icons/io'
import { RiDrizzleFill } from 'react-icons/ri'
import { MdFoggy } from 'react-icons/md'

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

   const getWeatherIcon = () => {
      if (!cloud) return null

      const weatherMain = cloud.weather[0].main

      switch (weatherMain) {
         case 'Drizzle':
            return <RiDrizzleFill />
         case 'Rain':
            return <IoRainy />
         case 'Sunny':
            return <IoMdSunny />
         case 'Clouds':
            return <IoIosCloudy />
         case 'Thunderstorms':
            return <IoThunderstormSharp />
         case 'Mist':
            return <MdFoggy />
         default:
            return <IoIosPartlySunny />
      }
   }

   return (
      <>
         {cloud ? (
            <div className="flex flex-row items-center gap-1 mr-2">
               {getWeatherIcon()}
               <p className="text-sm font-extralight">
                  {`${Math.round(cloud.main.temp_max)} ºC / ${Math.round((cloud.main.temp_max * 9) / 5 + 32)} ºF`}
               </p>
            </div>
         ) : (
            'cargando..'
         )}
      </>
   )
}

export default Weather

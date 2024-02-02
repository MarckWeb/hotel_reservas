import { useEffect, useState } from "react"
import useLocation from "../hook/useLocation"
import { getApiWeather } from '../services/serviceWeather'
import { WetherData } from '../types/weather'

import { IoRainy } from "react-icons/io5";
import { IoMdSunny } from "react-icons/io";

const Weather: React.FC = () => {
   const [cloud, setCloud] = useState<WetherData>()
   const { location } = useLocation()

   useEffect(() => {
      const handleApiWeather = async () => {
         try {
            if (location) {
               const weatherData = await getApiWeather(location);
               setCloud(weatherData)
            }

         } catch (error) {
            console.error("Error al actualizar datos de weather:", error);
         }
      };
      handleApiWeather();
   }, [location]);

   return (
      <div>
         {cloud?.weather[0].main}
         <IoRainy />
         <IoMdSunny />
      </div>
   )
}

export default Weather

import { useEffect, useState } from "react"
interface Time {
   hours: number,
   minutes: number
}

const Clock = () => {
   const [time, setTime] = useState<Time>()

   useEffect(() => {
      const updateTime = () => {
         const date = new Date();
         setTime({
            hours: date.getHours(),
            minutes: date.getMinutes(),
         });
      };
      const intervalId = setInterval(updateTime, 1000);
      return () => clearInterval(intervalId);
   }, []);

   return (
      <div className="text-5xl">
         {time
            ? <p>{time.hours < 10
               ? `0${time.hours}`
               : time.hours}:{time.minutes < 10
                  ? `0${time.minutes}`
                  : time.minutes}</p>
            : 'cargando...'}


      </div>
   )
}

export default Clock

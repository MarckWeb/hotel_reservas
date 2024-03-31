import { useEffect, useState } from 'react'
import BorderElememts from '../hook/BorderElememts'
interface Time {
  hours: number
  minutes: number
}

const Clock = () => {
  const [time, setTime] = useState<Time>()

  useEffect(() => {
    const updateTime = () => {
      const date = new Date()
      setTime({
        hours: date.getHours(),
        minutes: date.getMinutes(),
      })
    }
    const intervalId = setInterval(updateTime, 1000)
    return () => clearInterval(intervalId)
  }, [])

  return (
    <div className="flex flex-col items-center">
      <BorderElememts>
        {time ? (
          <p className="md:text-2xl m-auto text-background-second">
            {time.hours < 10 ? `0${time.hours}` : time.hours}:
            {time.minutes < 10 ? `0${time.minutes}` : time.minutes}
          </p>
        ) : (
          <p className="text-2xl m-auto text-background-second">...</p>
        )}
      </BorderElememts>

      <p className="text-[12px]  md:text-sm font-extralight mt-1 md:mt-3">
        Horas
      </p>
    </div>
  )
}

export default Clock

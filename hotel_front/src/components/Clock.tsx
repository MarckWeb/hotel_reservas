import { useEffect, useState } from 'react'
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
      <div className="relative inset-0 bg-gradient-to-r from-red-500 to-yellow-500 rounded-[50%]  w-14 h-14  md:w-[80px] md:h-[80px]">
        <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]  inset-0  w-[54px] h-[54px] md:w-[75px] md:h-[75px] bg-black rounded-[50%] flex">
          {time ? (
            <p className="md:text-2xl m-auto text-background-second">
              {time.hours < 10 ? `0${time.hours}` : time.hours}:
              {time.minutes < 10 ? `0${time.minutes}` : time.minutes}
            </p>
          ) : (
            <p className="text-2xl m-auto text-background-second">...</p>
          )}
        </div>
      </div>
      <p className="text-[12px]  md:text-sm font-extralight mt-1 md:mt-3">
        Horas
      </p>
    </div>
  )
}

export default Clock

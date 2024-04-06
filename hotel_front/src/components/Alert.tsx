import React, { useState, useEffect } from 'react'
import { useAlert } from '../context/auth-alert'

const Alert: React.FC = () => {
  const { message, setMessage } = useAlert()
  const [progress, setProgress] = useState(100)

  useEffect(() => {
    let interval: number | null = null

    if (message) {
      interval = window.setInterval(() => {
        setProgress((prevProgress) => {
          if (prevProgress <= 0) {
            clearInterval(interval as number)
            setMessage(null)
            return 100
          }
          return prevProgress - 10 // Ajusta el decremento según tus necesidades
        })
      }, 500) // Actualiza la barra cada 500ms
    }

    return () => {
      if (interval) {
        clearInterval(interval)
      }
    }
  }, [message, setMessage])

  return (
    <div
      className={`${message ? '' : 'hidden'} w-full max-w-[350px] absolute top-1 md:top-[130px] left-[50%] translate-x-[-50%]  p-2 bg-backgroun-title rounded-lg`}
    >
      <p className="text-center text-white  rounded-t p-2 bg-gradient-to-r from-red-500 to-yellow-500 border-b">
        {message}
      </p>
      <div
        className="rounded-b"
        style={{
          width: '100%',
          backgroundColor: '#e0e0e0',
        }}
      >
        <div
          className="rounded-b bg-background-second"
          style={{
            width: `${progress}%`,
            height: '10px',
            transition: '0.5s linear',
          }}
        ></div>
      </div>
    </div>
  )
}

export default Alert

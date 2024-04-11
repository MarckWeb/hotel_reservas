import React, { useEffect, useState } from 'react'
import Icono from '../assets/cargando.gif'

interface LoadingNotificationProps {
  onClose: () => void
}

const Notifi: React.FC<LoadingNotificationProps> = ({ onClose }) => {
  const [isVisible, setIsVisible] = useState(true)
  const [countdown, setCountdown] = useState(15)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
      onClose()
    }, 30000)

    const countdownTimer = setInterval(() => {
      setCountdown((prevCountdown) => {
        if (prevCountdown > 1) {
          return prevCountdown - 1
        } else {
          clearInterval(countdownTimer)
          return 0
        }
      })
    }, 1000)

    return () => {
      clearTimeout(timer)
      clearInterval(countdownTimer)
    }
  }, [onClose])

  if (!isVisible) return null
  return (
    <section className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full max-w-[750px] p-4 bg-backgroun-title rounded-lg z-50">
      <article className=" text-center text-white  rounded-t p-2 bg-gradient-to-r from-red-500 to-yellow-500 border-b ">
        <p className="mb-2">
          Esta aplicación requiere permisos de ubicación para su correcto
          funcionamiento. De lo contrario, la app utilizará una ubicación
          predeterminada, que es la de Bilbao.
        </p>
        <hr />
        <p>
          Para probar la app, puedes utilizar datos ficticios, ya que no se
          requiere verificación de correo electrónico
        </p>
        <hr />
        <p>
          Ejemplo: <br /> - Nombre: Daniel Sanchez <br />
          - Username: daniel123 <br />- Contraseña:542dani{' '}
        </p>
        <hr />

        <p className="text-center pb-1">!Gracias por probar mi Aplicacion¡</p>
        {countdown > 1 ? (
          <p className="border-4 border-black w-12 h-12 rounded-[50%] m-auto p-2">
            {countdown}
          </p>
        ) : (
          <img className=" w-12 h-12 m-auto" src={Icono} alt="" />
        )}
        <div className="h-2 bg-yellow-50 mt-1">
          <div
            className="h-full bg-orange-500"
            style={{
              width: `${((15 - countdown) / 15) * 100}%`,
              transition: 'width 1s linear',
            }}
          ></div>
        </div>
      </article>
    </section>
  )
}

export default Notifi

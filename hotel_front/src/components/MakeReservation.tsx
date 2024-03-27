import { useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../app/store'
import Button from './Button'
import DateInput from './DateInput'
import Select from './Select'
import { createReserva } from '../services/reservation'

const MakeReservation = ({ roomNumber }: any) => {
  // no utilizo useForm para tambien poder parcticar las distintas formas de recopilar datos de un formulario
  const [valuesReservation, setValuesReservation] = useState({
    entrance: '',
    exit: '',
  })
  const [View, setView] = useState(false)
  const user = useSelector((state: RootState) => state.user)
  console.log(roomNumber)

  const onSubmit = (e: any) => {
    setValuesReservation({
      ...valuesReservation,
      [e.target.name]: e.target.value,
    })
  }

  const hanldeReservation = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    e.preventDefault()
    const objectReserva = {
      nRoom: roomNumber,
      checkIn: valuesReservation.entrance,
      checkOut: valuesReservation.exit,
      userId: user[0]._id,
    }

    const credentials = await createReserva(objectReserva)

    if (credentials.status === 404) {
      alert(credentials.message)
    } else if (credentials.status === 401) {
      alert(credentials.message)
    } else {
      setView(!View)
      setValuesReservation({
        entrance: '',
        exit: '',
      })
    }
  }

  return (
    <form className="text-color-text-second font-extralight flex flex-col justify-center items-center sm:grid sm:grid-cols-2 sm:gap-4 p-4">
      {View ? (
        <h2 className="text-background-second">
          Reserva completada con exito. Gracias pro preferirnos
        </h2>
      ) : (
        <>
          <DateInput
            label="Entrada"
            type="date"
            name="entrance"
            value={valuesReservation.entrance}
            onChange={onSubmit}
          />
          <DateInput
            label="Salida"
            type="date"
            name="exit"
            value={valuesReservation.exit}
            onChange={onSubmit}
          />

          <div className="mt-3 flex items-center gap-2 text-color-text-second font-light col-span-2 m-auto">
            <input type="checkbox" />
            <span>Todavia no he decidido las fecha</span>
          </div>

          <Select
            label="Huespedes"
            option1="1"
            option2="2"
            option3="mas de 2"
          />
          <Select
            label="Tipo de habitacion"
            option1="suite"
            option2="habitacion"
            option3="familiar"
          />
          <Select
            label="Preferencia de cama"
            option1="Litera"
            option2="Cama nido"
            option3="Cama electrica"
          />
          <Select
            label="Desayuno"
            option1="Desayuno Buffet"
            option2="Desayuno American"
            option3="Desayuno Ingles"
          />
          <Button
            type="submit"
            text="Quiero Reservar"
            onClick={hanldeReservation}
          />
        </>
      )}
    </form>
  )
}

export default MakeReservation

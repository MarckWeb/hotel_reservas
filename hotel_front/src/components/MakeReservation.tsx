import Button from './Button'
import DateInput from './DateInput'
import Select from './Select'
import { useEffect, useState } from 'react'

const MakeReservation = ({ roomNumber }: any) => {
  const [valuesReservation, setValuesReservation] = useState({
    entrance: '',
    exit: '',
  })

  console.log(roomNumber)

  const onSubmit = (e: any) => {
    setValuesReservation({
      ...valuesReservation,
      [e.target.name]: e.target.value,
    })
  }

  const hanldeReservation = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    e.preventDefault()
    const objectReserva = {
      nRoom: roomNumber,
      checkIn: valuesReservation.entrance,
      checkOut: valuesReservation.exit,
      userId: '65c24e8aa402ea9bcec0eb71',
    }

    console.log(objectReserva)
  }

  return (
    <form className="text-color-text-second font-extralight flex flex-col justify-center items-center sm:grid sm:grid-cols-2 sm:gap-4 p-4">
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
        name="nRoom"
        label="Huespedes"
        option1="1"
        option2="2"
        option3="mas de 2"
      />
      <Select
        name="nRoom"
        label="Tipo de habitacion"
        option1="suite"
        option2="habitacion"
        option3="familiar"
      />
      <Select
        name="nRoom"
        label="Preferencia de cama"
        option1="Litera"
        option2="Cama nido"
        option3="Cama electrica"
      />
      <Select
        name="nRoom"
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
    </form>
  )
}

export default MakeReservation

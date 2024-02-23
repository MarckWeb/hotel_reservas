import Button from './Button'
import DateInput from './DateInput'
import Select from './Select'

const MakeReservation = () => {
  return (
    <form className="text-color-text-second font-extralight flex flex-col justify-center items-center sm:grid sm:grid-cols-2 sm:gap-4 p-4">
      <DateInput label="Entrada" type="date" name="entrance" />
      <DateInput label="Salida" type="date" name="exit" />

      <div className="mt-3 flex items-center gap-2 text-color-text-second font-light col-span-2 m-auto">
        <input type="checkbox" />
        <span>Todavia no he decidido las fecha</span>
      </div>

      <Select
        name="nRoom"
        label="Huespedes"
        option1="suite"
        option2="habitacion"
        option3="familiar"
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
        option1="suite"
        option2="habitacion"
        option3="familiar"
      />
      <Select
        name="nRoom"
        label="Desayuno"
        option1="suite"
        option2="habitacion"
        option3="familiar"
      />
      <Button type="button" text="Quiero Reservar" />
    </form>
  )
}

export default MakeReservation

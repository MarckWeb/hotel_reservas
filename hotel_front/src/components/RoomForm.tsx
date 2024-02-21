import Button from './Button'
import Select from './Select'

const RoomForm = ({ room }: any) => {
  const handleReservation = () => {
    console.log('hacer la reserva')
  }
  return (
    <div className="w-full max-w-56 ml-2  flex flex-col md:mr-14">
      <Select
        name="nRoom"
        label="Nº de habitaciones"
        option1="suite"
        option2="habitacion"
        option3="familiar"
      />

      <Select
        name="otros"
        label="Otros Servicios"
        option1="suite"
        option2="habitacion"
        option3="familiar"
      />

      <p className="flex justify-between items-end my-3">
        <span>Total</span>{' '}
        <span className="text-background-second text-[30px]">
          {room[0]?.price}
        </span>
      </p>

      <ul>
        <li className="border-b border-black pt-2">
          <span>Articulo:</span>{' '}
          <span className="text-background-second"> 2 Suiteluxi</span>
        </li>
        <li className="border-b border-black pt-2">
          <span>IVA</span> <span>21% Incluido</span>
        </li>
        <li className="border-b border-black pt-2">
          <span>Fecha</span>{' '}
          <span className="text-background-second ">2 Dic a 12 dic 2023</span>
        </li>
      </ul>
      <div className="ml-auto">
        <Button text="Reservar" type="button" onClick={handleReservation} />
      </div>
    </div>
  )
}

export default RoomForm

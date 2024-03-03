import Button from './Button'
import Select from './Select'
import { ActiveReservation } from '../types/reserva'

const RoomForm: React.FC<ActiveReservation> = ({
  isReserving,
  setIsReserving,
  price,
  nameRoom,
}) => {
  const handleReservation = () => {
    setIsReserving(!isReserving)
  }
  return (
    <div className="flex flex-col gap-5 mt-6 ">
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

      <div className="border p-4 rounded-lg bg-black text-sm">
        <p className="flex justify-between items-start">
          <span className="text-lg">Total</span>{' '}
          <span className="text-background-second text-[30px]">{price}</span>
        </p>
        <ul>
          <li className="border-b border-border-cards pt-2 flex justify-between">
            <span>Articulo:</span>{' '}
            <span className="text-background-second "> {nameRoom}</span>
          </li>
          <li className="border-b border-border-cards pt-2 flex justify-between">
            <span>IVA</span> <span>21% Incluido</span>
          </li>
          {/* <li className="border-b border-border-cards pt-2 flex justify-between">
            <span>Fecha</span>{' '}
            <span className="text-background-second ">2 Dic a 12 dic 2023</span>
          </li> */}
        </ul>
        <div className="ml-auto">
          <Button text="Reservar" type="button" onClick={handleReservation} />
        </div>
      </div>
    </div>
  )
}

export default RoomForm

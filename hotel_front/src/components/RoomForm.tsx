import Button from './Button'
import { ActiveReservation } from '../types/reserva'

const RoomForm: React.FC<ActiveReservation> = ({
  isReserving,
  setIsReserving,
  price,
  nameRoom,
}) => {
  //muestra el formulario de reserva
  const handleReservation = () => {
    setIsReserving(!isReserving)
  }
  return (
    <div className="mt-16">
      <div className="border py-6 px-4 rounded-lg bg-black text-sm">
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
        </ul>
        <div className="ml-auto">
          <Button text="Reservar" type="button" onClick={handleReservation} />
        </div>
      </div>
    </div>
  )
}

export default RoomForm

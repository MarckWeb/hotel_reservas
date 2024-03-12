import { FaArrowLeft } from 'react-icons/fa'
import MakeReservation from '../components/MakeReservation'
import { ActiveReservation } from '../types/reserva'

const FormReserva: React.FC<ActiveReservation> = ({
  isReserving,
  setIsReserving,
  roomNumber,
}) => {
  return (
    <section
      className={`fixed top-0 left-0 w-full h-full z-30 flex justify-center items-center ${
        isReserving ? 'backdrop-blur-sm' : 'hidden'
      }`}
    >
      <div className="w-full max-w-[500px] pb-5 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-10 bg-gradient-to-b from-zinc-900 via-zinc-700 to-zinc-900 rounded-lg">
        <div className="bg-gradient-to-b from-zinc-900 via-zinc-900 to-zinc-900 text-color-text-second font-light text-center py-2 rounded-t-lg relative">
          <FaArrowLeft
            className="absolute left-3 top-3 text-lg text-background-second cursor-pointer"
            onClick={() => setIsReserving(!isReserving)}
          />
          <h3 className="text-lg">Formulario de Reserva</h3>
        </div>
        <MakeReservation roomNumber={roomNumber} />
      </div>
    </section>
  )
}

export default FormReserva

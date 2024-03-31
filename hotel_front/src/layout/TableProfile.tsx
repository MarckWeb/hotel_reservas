import { FaPrint } from 'react-icons/fa'
import { RiDeleteBin2Line } from 'react-icons/ri'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../app/store'
import { deleteReserva } from '../reducer/reserva/reserva'
import { deleteCateringAsync } from '../reducer/catering/catering'

const TableProfile: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>()
  const reservation = useSelector((state: RootState) => state.reserva)
  const catering = useSelector((state: RootState) => state.catering)

  const deleteReservationRoom = (id: string) => {
    dispatch(deleteReserva(id))
  }

  const deleteCateringMenu = (id: string) => {
    dispatch(deleteCateringAsync(id))
  }
  return (
    <div className="w-full my-3 text-white ">
      <table className="w-full border-separate text-center bg-black rounded">
        <thead>
          <tr className="text-color-text-second font-light">
            <th className="bg-orange-600 rounded">Nº</th>
            <th className="bg-orange-600 rounded">Check in</th>
            <th className="bg-orange-600 rounded">Check out</th>
            <th className="bg-orange-600 rounded">tipo</th>
            <th className="bg-orange-600 rounded">Imp</th>
            <th className="bg-orange-600 rounded">Elim</th>
          </tr>
        </thead>
        <tbody>
          {reservation.length > 0 &&
            reservation.map((reserva) => {
              return (
                <tr key={reserva._id} className="w-full font-extralight  ">
                  <td className="bg-background-second rounded">
                    {reserva.nRoom}
                  </td>
                  <td className="bg-background-second rounded">
                    {reserva.checkIn.slice(5)}
                  </td>
                  <td className="bg-background-second rounded">
                    {reserva.checkOut.slice(5)}
                  </td>
                  <td className="bg-background-second rounded">Reserva </td>
                  <td className="p-2 bg-background-second rounded cursor-pointer hover:bg-orange-500 hover:text-color-text-second">
                    <FaPrint className="" />
                  </td>
                  <td
                    onClick={() => deleteReservationRoom(reservation[0]._id)}
                    className="p-2 bg-background-second rounded cursor-pointer hover:bg-orange-500 hover:text-color-text-second"
                  >
                    <RiDeleteBin2Line />
                  </td>
                </tr>
              )
            })}
          {catering &&
            catering.map((item) => {
              return (
                <tr key={item._id} className="w-full font-extralight  ">
                  <td className="bg-background-second rounded">
                    {item._id.slice(21)}
                  </td>
                  <td className="bg-background-second rounded">
                    {item.createdAt.slice(0, 7)}
                  </td>
                  <td className="bg-background-second rounded">
                    {item.updatedAt.slice(0, 7)}
                  </td>
                  <td className="bg-background-second rounded">Servicio</td>
                  <td className="p-2 bg-background-second rounded cursor-pointer">
                    <FaPrint />
                  </td>
                  <td
                    onClick={() => deleteCateringMenu(catering[0]._id)}
                    className="p-2 bg-background-second rounded cursor-pointer"
                  >
                    <RiDeleteBin2Line />
                  </td>
                </tr>
              )
            })}
        </tbody>
      </table>
    </div>
  )
}
export default TableProfile

import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { initializeRooms } from '../reducer/room/room'
import { AppDispatch, RootState } from '../app/store'

const Reservas = () => {
   const disptach = useDispatch<AppDispatch>()
   const rooms = useSelector((state: RootState) => state.rooms)

   useEffect(() => {
      disptach(initializeRooms())
   }, [disptach])

   console.log(rooms)
   return (
      <div className="w-full h-screen bg-reserva-background text-white">
         {rooms &&
            rooms.map((room) => {
               return (
                  <section key={room._id}>
                     <img
                        className="w-[250px] h-[300px] object-cover"
                        src={room.image}
                        alt=""
                     />
                     <h3>{room.title}</h3>
                     <p>{room.description}</p>
                  </section>
               )
            })}
      </div>
   )
}

export default Reservas

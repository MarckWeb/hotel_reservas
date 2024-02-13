import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { initializeRooms } from '../reducer/room/room'
import { AppDispatch, RootState } from '../app/store'
import Card from '../components/Card'

const Reservas = () => {
   const disptach = useDispatch<AppDispatch>()
   const rooms = useSelector((state: RootState) => state.rooms)

   useEffect(() => {
      disptach(initializeRooms())
   }, [disptach])

   console.log(rooms)
   return (
      <section className="w-full h-screen bg-reserva-background overflow-hidden">
         <article className="flex flex-row gap-4 border-2 border-green-600 mt-[80px] w-[1300px]">
            {rooms &&
               rooms.map((room) => {
                  return <Card key={room._id} room={room} />
               })}
         </article>
      </section>
   )
}

//ajustar paddin de phone y windows,
//en el gap y ver elpaddin del costado aumentar imagesn hacer touch

export default Reservas

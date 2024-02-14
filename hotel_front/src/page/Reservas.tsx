import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { initializeRooms } from '../reducer/room/room'
import { AppDispatch, RootState } from '../app/store'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import Card from '../components/Card'

const Reservas = () => {
   const disptach = useDispatch<AppDispatch>()
   const rooms = useSelector((state: RootState) => state.rooms)

   //const handleDragStart = (e) => e.preventDefault()

   useEffect(() => {
      disptach(initializeRooms())
   }, [disptach])

   const responsive = {
      0: { items: 1 },
      600: { items: 2 },
      800: { items: 3 },
      1300: { items: 4 },
   }

   // const Gallery = () => {
   //    return (
   //       <AliceCarousel
   //          mouseTracking
   //          items={rooms.map((room) => (
   //             <Card key={room._id} room={room} />
   //          ))}
   //          //onDragStart={handleDragStart}
   //       />
   //    )
   // }

   console.log(rooms)
   return (
      <section className="w-full h-screen bg-reserva-background overflow-hidden">
         <article className="pl-[10px] md:pl-[25px] mt-[80px]">
            <AliceCarousel
               mouseTracking
               responsive={responsive}
               items={rooms.map((room) => (
                  <Card key={room._id} room={room} />
               ))}
               disableButtonsControls
               disableDotsControls
            />
         </article>
      </section>
   )
}

export default Reservas

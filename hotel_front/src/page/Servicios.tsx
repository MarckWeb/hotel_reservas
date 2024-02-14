import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { initializeServices } from '../reducer/service/service'
import { initializeRooms } from '../reducer/room/room'
import { AppDispatch, RootState } from '../app/store'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import Card from '../components/Card'

const Servicios = () => {
   const disptach = useDispatch<AppDispatch>()
   const services = useSelector((state: RootState) => state.services)
   console.log(services)

   //const handleDragStart = (e) => e.preventDefault()

   useEffect(() => {
      disptach(initializeServices())
   }, [disptach])

   const responsive = {
      0: { items: 1 },
      600: { items: 2 },
      800: { items: 3 },
      1300: { items: 4 },
   }
   return (
      <section className="w-full h-screen bg-reserva-background overflow-hidden">
         <article className="pl-[10px] md:pl-[25px] mt-[80px]">
            {/* <AliceCarousel
               mouseTracking
               responsive={responsive}
               items={services.map((service) => (
                  <Card key={service._id} room={service} />
               ))}
               disableButtonsControls
               disableDotsControls
            /> */}
         </article>
      </section>
   )
}

//llego el service y estamos listos

export default Servicios

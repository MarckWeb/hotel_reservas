import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { initializeServices } from '../reducer/service/service'
import { AppDispatch, RootState } from '../app/store'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import Card from '../components/Card'

const Servicios = () => {
   const disptach = useDispatch<AppDispatch>()
   const services = useSelector((state: RootState) => state.services)

   useEffect(() => {
      disptach(initializeServices())
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
   return (
      <section className="w-full h-screen bg-reserva-background overflow-hidden">
         <article className="pl-[10px] md:pl-[25px] mt-[80px]">
            <AliceCarousel
               mouseTracking
               responsive={responsive}
               items={services.map((service) => (
                  <Card
                     key={service._id}
                     title={service.title}
                     description={service.description}
                     image={service.image}
                  />
               ))}
               disableButtonsControls
               disableDotsControls
            />
         </article>
      </section>
   )
}

export default Servicios

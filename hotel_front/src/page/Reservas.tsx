import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { initializeRooms } from '../reducer/room/room'
import { AppDispatch, RootState } from '../app/store'
import { reserva } from '../assets/footer/index'

import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'

import Card from '../components/Card'
import Footer from '../layout/Footer'

const Reservas = () => {
  const distpach = useDispatch<AppDispatch>()
  const rooms = useSelector((state: RootState) => state.rooms)

  useEffect(() => {
    distpach(initializeRooms())
  }, [distpach])

  const responsive = {
    0: { items: 1 },
    600: { items: 2 },
    800: { items: 3 },
    1300: { items: 4 },
  }

  return (
    <section className="w-full h-screen bg-reserva-background overflow-hidden relative">
      <article className="pl-[30px] md:pl-[35px] mt-[80px]">
        <AliceCarousel
          mouseTracking
          responsive={responsive}
          items={rooms.map((room) => (
            <Card
              key={room._id}
              id={room._id}
              image={room.image}
              title={room.title}
              description={room.shortDescription}
              price={room.price}
            />
          ))}
          disableButtonsControls
          disableDotsControls
        />
      </article>
      <Footer
        icon={reserva}
        title="Descubre nuestras mejores habitaciones para descansar mejor"
        subtitle="Encuentra el placer de descansar"
      />
    </section>
  )
}

export default Reservas

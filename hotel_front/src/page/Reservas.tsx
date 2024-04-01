import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { initializeRooms } from '../reducer/room/room'
import { AppDispatch, RootState } from '../app/store'
import { reserva } from '../assets/footer/index'

import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'

import Card from '../components/Card'
import Footer from '../layout/Footer'
import { useNavigate } from 'react-router-dom'
import { responsive } from '../responsive/responsive'

const Reservas = () => {
  const distpach = useDispatch<AppDispatch>()
  const rooms = useSelector((state: RootState) => state.rooms)

  useEffect(() => {
    distpach(initializeRooms())
  }, [distpach])

  const navigate = useNavigate()
  const naviagteToRoomId = (id: string) => {
    navigate(`/reservas/${id}`)
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
              onClick={naviagteToRoomId}
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

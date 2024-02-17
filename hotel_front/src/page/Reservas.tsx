import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { initializeRooms } from '../reducer/room/room'
import { AppDispatch, RootState } from '../app/store'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import Card from '../components/Card'
import { ToggleActive } from '../types/toggle'

const Reservas = ({ setIsActive }: ToggleActive) => {
  const disptach = useDispatch<AppDispatch>()
  const rooms = useSelector((state: RootState) => state.rooms)

  useEffect(() => {
    disptach(initializeRooms())
  }, [disptach])

  const responsive = {
    0: { items: 1 },
    600: { items: 2 },
    800: { items: 3 },
    1300: { items: 4 },
  }

  console.log(rooms)
  return (
    <section
      className="w-full h-screen bg-reserva-background overflow-hidden"
      onClick={setIsActive}
    >
      <article className="pl-[30px] md:pl-[35px] mt-[80px]">
        <AliceCarousel
          mouseTracking
          responsive={responsive}
          items={rooms.map((room) => (
            <Card
              key={room._id}
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
    </section>
  )
}

export default Reservas

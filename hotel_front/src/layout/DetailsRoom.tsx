import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { AppDispatch, RootState } from '../app/store'
import { useEffect } from 'react'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import { handleRoomId } from '../reducer/room/room'

import RoomForm from '../components/RoomForm'
import Slider from '../components/Slider'
import InfoRoom from '../components/InfoRoom'

const DetailsRoom = () => {
  const disptach = useDispatch<AppDispatch>()
  const room = useSelector((state: RootState) => state.rooms)
  console.log(room)

  const params = useParams()
  const { roomId } = params

  useEffect(() => {
    disptach(handleRoomId(roomId ?? ''))
  }, [disptach])

  return (
    <section className="w-full bg-reserva-background py-16">
      <article className="w-full max-w-[900px] border border-red-600 m-auto bg-gradient-to-b from-zinc-900 via-zinc-900 to-zinc-900 text-white font-light rounded-lg">
        <Slider room={room ? room : []} />

        <InfoRoom room={room ? room : []} />

        <RoomForm room={room ? room : []} />
      </article>
    </section>
  )
}

export default DetailsRoom

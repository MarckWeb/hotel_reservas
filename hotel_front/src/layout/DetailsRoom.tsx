import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { AppDispatch, RootState } from '../app/store'
import { useEffect, useState } from 'react'
import { handleRoomId } from '../reducer/room/room'

import RoomForm from '../components/RoomForm'
import Slider from '../components/Slider'
import InfoRoom from '../components/InfoRoom'
import FormReserva from './FormReserva'

const DetailsRoom = () => {
  const [isReserving, setIsReserving] = useState<boolean>(false)
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
      <article className="w-full max-w-[900px]  m-auto bg-background-cards border border-border-cards p-3 text-white font-light pb-4 md:grid md:grid-rows-[250px,auto] md:grid-flow-col rounded-xl">
        <Slider room={room ? room : []} />

        <InfoRoom room={room ? room : []} />

        <RoomForm
          isReserving={isReserving}
          setIsReserving={setIsReserving}
          price={room[0]?.price}
          nameRoom={room[0]?.title}
        />
      </article>

      <FormReserva isReserving={isReserving} setIsReserving={setIsReserving} />
    </section>
  )
}

export default DetailsRoom

import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { AppDispatch, RootState } from '../app/store'
import { useEffect } from 'react'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import { handleRoomId } from '../reducer/room/room'

const DetailsRoom = () => {
  const disptach = useDispatch<AppDispatch>()
  const room = useSelector((state: RootState) => state.rooms)
  console.log(room)

  const params = useParams()
  const { roomId } = params

  useEffect(() => {
    disptach(handleRoomId(roomId ?? ''))
  }, [disptach])

  // const Gallery = () => {
  //   return (
  //     <AliceCarousel
  //       mouseTracking
  //       items={room[0].images.map((elem) => {
  //         return (
  //           <img
  //             className="w-full h-full  object-cover"
  //             src={elem}
  //             alt="Imagen"
  //           />
  //         )
  //       })}
  //       disableButtonsControls
  //       disableDotsControls
  //     />
  //   )
  // }

  return (
    <section className="w-full h-screen bg-reserva-background overflow-hidden">
      <article className="w-full max-w-[800px] border border-red-600 m-auto mt-[60px]">
        <div className="w-full h-[250px] border border-blue-700 overflow-hidden ">
          {/* <Gallery /> */}
        </div>
        <div>
          <h2>{room[0].title}</h2>
          <p>{room[0].description}</p>
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
        </div>
        <div></div>
      </article>
    </section>
  )
}

export default DetailsRoom
//ver id service
//maquetar room params
//slider images
// show images footer

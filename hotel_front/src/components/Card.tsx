import { IoIosStarOutline } from 'react-icons/io'
import { RoomParams } from '../types/rooms'
import Button from './Button'
import { useNavigate } from 'react-router-dom'

const Card: React.FC<RoomParams> = ({
  id,
  image,
  title,
  description,
  price,
}) => {
  const navigate = useNavigate()
  const naviagteToRoomId = () => {
    navigate(`/reservas/${id}`)
  }
  return (
    <section className="w-72 h-[31.25rem] bg-background-primary text-sm">
      <figure className="pb-[18.75rem] relative">
        <img
          className=" absolute w-full h-full object-cover pointer-events-none select-text"
          src={image}
          alt="Imagen habitacion"
        />
      </figure>

      <div className="p-4 flex flex-col h-[12.5rem]">
        <h3 className="text-background-second mb-1">{title}</h3>
        <p className="text-white font-extralight">{description}</p>
        {price ? (
          <section className="flex py-3 text-white ml-auto text-base">
            <IoIosStarOutline />
            <IoIosStarOutline />
            <IoIosStarOutline />
            <IoIosStarOutline />
            <IoIosStarOutline />
          </section>
        ) : (
          ''
        )}

        <div className="mt-auto flex justify-between items-center">
          {price ? (
            <p className="text-4xl text-background-second font-light">
              {price}
            </p>
          ) : (
            <Button type="button" text="Opinar" />
          )}

          <Button type="button" text="Reservar" onClick={naviagteToRoomId} />
        </div>
      </div>
    </section>
  )
}

export default Card

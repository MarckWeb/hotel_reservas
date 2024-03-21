import { RoomParams } from '../types/rooms'
import Button from './Button'
import { useNavigate } from 'react-router-dom'
import Starts from './Starts'

const Card: React.FC<RoomParams> = ({
  id,
  image,
  title,
  description,
  price,
}) => {
  const navigate = useNavigate()
  const naviagteToRoomId = (page: string) => {
    navigate(`/${page}/${id}`)
  }
  return (
    <section className="w-72 h-[31.25rem]  border border-border-cards p-2 rounded-lg bg-background-cards text-sm">
      <figure className="pb-[18.75rem] relative">
        <img
          className=" absolute w-full h-full object-cover pointer-events-none select-text rounded-[4px]"
          src={image}
          alt="Imagen habitacion"
        />
      </figure>

      <div className="p-2 flex flex-col h-[12.5rem]">
        <h3 className="text-background-second mb-1">{title}</h3>
        <p className="text-white font-extralight">{description}</p>
        {price ? <Starts /> : ''}

        <div className="flex justify-between items-center">
          {price ? (
            <p className="text-4xl text-background-second font-light">
              {price}
            </p>
          ) : (
            <Button type="button" text="Opinar" />
          )}

          <Button
            type="button"
            text="Reservar"
            onClick={() => naviagteToRoomId(price ? 'reservas' : 'servicios')}
          />
        </div>
      </div>
    </section>
  )
}

export default Card

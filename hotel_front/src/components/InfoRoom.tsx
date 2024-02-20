import { TbHotelService } from 'react-icons/tb'
import { IoWifiSharp } from 'react-icons/io5'
import { MdRoomService } from 'react-icons/md'
import Starts from '../components/Starts'
import ComplementService from './ComplementService'

const InfoRoom = ({ room }: any) => {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between items-center p-1">
        <h2 className="text-background-second font-semibold text-lg">
          {room[0]?.title}
        </h2>
        <Starts />
      </div>

      <p className="p-2 text-justify">{room[0]?.description}</p>
      <a
        className="text-background-second font-extralight hover:border-b border-background-second block ml-auto mr-4"
        href="#"
      >
        Ver todos los comentarios
      </a>
      <div className=" flex gap-3 p-4">
        <ComplementService
          icon={<TbHotelService className="text-2xl m-auto text-black" />}
        />
        <ComplementService
          icon={<IoWifiSharp className="text-2xl m-auto text-black" />}
        />
        <ComplementService
          icon={<MdRoomService className="text-2xl m-auto text-black" />}
        />
      </div>

      <figure className="hidden md:flex">
        <img src={room[0]?.images[3]} alt="" />
        <img src={room[0]?.images[2]} alt="" />
        <img src={room[0]?.images[1]} alt="" />
      </figure>
    </div>
  )
}

export default InfoRoom

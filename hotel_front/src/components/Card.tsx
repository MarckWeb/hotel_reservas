import { IoIosStarOutline } from 'react-icons/io'
import { Room } from '../types/rooms'
import Button from './Button'

interface CardProps {
   room: Room
}

const Card: React.FC<CardProps> = ({ room }) => {
   return (
      <section className="w-[280px] h-[500px] bg-background-primary text-xs">
         <figure className="pb-[300px] relative">
            <img
               className=" absolute w-full h-full"
               src={room.image}
               alt="Imagen habitacion"
            />
         </figure>

         <div className="p-2 flex flex-col gap-1 h-[180px]">
            <h3 className="text-background-second">{room.title}</h3>
            <p className="text-white font-extralight">
               {room.shortDescription}
            </p>
            <section className="flex py-3 text-white ml-auto">
               <IoIosStarOutline />
               <IoIosStarOutline />
               <IoIosStarOutline />
               <IoIosStarOutline />
               <IoIosStarOutline />
            </section>
            <div className="mt-auto flex justify-between items-center">
               <p className="text-4xl text-background-second font-light">
                  {room.price}
               </p>
               <Button type="button" text="Reservar" />
            </div>
         </div>
      </section>
   )
}

export default Card

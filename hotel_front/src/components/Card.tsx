import { IoIosStarOutline } from 'react-icons/io'
import { Room } from '../types/rooms'
import Button from './Button'

interface CardProps {
   room: Room
}

const Card: React.FC<CardProps> = ({ room }) => {
   return (
      <section className="w-72 h-[500px] bg-background-primary text-sm">
         <figure className="pb-[300px] relative">
            <img
               className=" absolute w-full h-full object-cover pointer-events-none select-text"
               src={room.image}
               alt="Imagen habitacion"
            />
         </figure>

         <div className="p-4 flex flex-col h-[200px]">
            <h3 className="text-background-second mb-1">{room.title}</h3>
            <p className="text-white font-extralight">
               {room.shortDescription}
            </p>
            <section className="flex py-3 text-white ml-auto text-base">
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

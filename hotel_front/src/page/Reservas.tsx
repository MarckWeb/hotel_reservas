import { useEffect, useState } from 'react'

const Reservas = () => {
   const [hotel, setHotel] = useState()

   const callApi = async () => {
      const res = await fetch('http://localhost:3000/room')
      const data = await res.json()
      console.log(data)
      setHotel(data)
   }

   useEffect(() => {
      callApi()
   }, [])
   return (
      <div className="w-full h-screen bg-reserva-background text-white">
         {/* {hotel &&
            hotel.map((room) => {
               return (
                  <section key={room._id}>
                     <img
                        className="w-[250px] h-[300px] object-cover"
                        src={room.image}
                        alt=""
                     />
                     <h3>{room.title}</h3>
                     <p>{room.description}</p>
                  </section>
               )
            })} */}
      </div>
   )
}

export default Reservas

import { FaEye } from 'react-icons/fa'
import { FaRankingStar } from 'react-icons/fa6'
import { FaCommentDots } from 'react-icons/fa'
import { FaRegCircleUser } from 'react-icons/fa6'
import { SlOptionsVertical } from 'react-icons/sl'
import { FaExchangeAlt } from 'react-icons/fa'

const Profile = () => {
   return (
      <section className="w-full h-screen bg-perfil-background text-black grid ">
         <article className="m-auto w-full max-w-[600px] bg-gradient-to-b from-zinc-900 via-zinc-700 to-zinc-900 rounded-lg">
            <h2 className="bg-black text-color-text-second text-lg rounded-t-lg py-2 px-4">
               Mi Perfil
            </h2>
            <div className="w-full relative">
               <img src="img/perfil.png" alt="" />
               <figure className="w-[30%] h-[150px] border-2 border-white rounded-[50%] absolute top-0 left-0">
                  <img src="" alt="" />
               </figure>
            </div>
            <section className="flex justify-center items-center gap-5 mt-2">
               <div className="flex flex-col items-center border border-white rounded-md p-2">
                  <span className="text-background-second">
                     <FaEye />
                  </span>
                  <span className="font-extralight text-color-text-second">
                     Vistas
                  </span>
                  <span>2</span>
               </div>

               <div>
                  <span>
                     <FaRankingStar />
                  </span>
                  <span>Puntos</span>
                  <span>2</span>
               </div>
               <div>
                  <span>
                     <FaCommentDots />
                  </span>
                  <span>Comentarios</span>
                  <span>2</span>
               </div>
            </section>
            <div className="w-full h-36 border border-x-color-text-second my-3"></div>
            <ul className="flex justify-center items-center gap-5 mt-2">
               <li className="flex flex-col items-center border border-white rounded-md p-2">
                  <span className="text-background-second">
                     <FaRegCircleUser />
                  </span>
                  <span className="font-extralight text-color-text-second">
                     Editar Perfil
                  </span>
               </li>
               <li>
                  <span>
                     <SlOptionsVertical />
                  </span>
                  <span>Opciones</span>
               </li>
               <li>
                  <span>
                     <FaExchangeAlt />
                  </span>
                  <span>Canjear Puntos</span>
               </li>
            </ul>
         </article>
      </section>
   )
}

export default Profile
//en pantalla movil solo icono y sin rounded y w-full, imagen perfil al medio, en pantalla md todo

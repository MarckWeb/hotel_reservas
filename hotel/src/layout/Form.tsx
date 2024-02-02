import { useForm } from "react-hook-form"
import { FormValues } from '../types/formValues'

import { FaUser } from "react-icons/fa";
import { FaUserSecret } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";

const Form: React.FC = () => {

   const {
      register,
      handleSubmit,
      formState: { errors },
      reset
   } = useForm<FormValues>({
      defaultValues: {
         name: '',
         username: '',
         password: ''
      }
   });


   const onSubmit = handleSubmit((data) => {
      //datos del formulario
      console.log(data)
      reset()
      //hacer en el emvio post
   })

   return (
      <div className='w-[250px] h-[250px] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-10 bg-gradient-to-b from-zinc-900 via-zinc-700 to-zinc-900 rounded-lg'>

         <h3 className="bg-gradient-to-b from-zinc-900 via-zinc-900 to-zinc-900 text-color-text-second font-light text-center py-2 rounded-t-lg">Registro</h3>
         <form onSubmit={onSubmit} className="flex flex-col justify-between gap-2 items-center mt-4">
            <div className="flex gap-2 items-center bg-gradient-to-b from-zinc-900 via-zinc-900 to-zinc-900 py-1 px-2 rounded">
               <label htmlFor="name"><FaUser className="text-color-text-second" /></label>
               <input type="text" className="bg-transparent outline-none text-color-text-second font-light"
                  {...register('name', {
                     required: {
                        value: true,
                        message: 'El nombre es requerido'
                     },
                     minLength: {
                        value: 2,
                        message: 'Nombre debe tener al menos 2 caracteres'
                     },
                     maxLength: {
                        value: 20,
                        message: 'Nombre debe tener maximo 20 caracteres'
                     }
                  })} />
            </div>

            <div className="flex gap-2 items-center bg-gradient-to-b from-zinc-900 via-zinc-900 to-zinc-900 py-1 px-2 rounded">
               <label htmlFor="username"><FaUserSecret className="text-color-text-second outline-none" /></label>
               <input className="bg-transparent text-color-text-second outline-none font-light" type="text"
                  {...register('username', {
                     required: {
                        value: true,
                        message: 'El nombre de usuario es requerido'
                     },
                     minLength: {
                        value: 2,
                        message: 'Nombre de usuario debe tener al menos 2 caracteres'
                     },
                     maxLength: {
                        value: 20,
                        message: 'Nombre debe tener maximo 20 caracteres'
                     }
                  })} />
            </div>

            <div className="flex gap-2 items-center bg-gradient-to-b from-zinc-900 via-zinc-900 to-zinc-900 py-1 px-2 rounded">
               <label htmlFor="password"><RiLockPasswordFill className="text-color-text-second" /></label>
               <input className="bg-transparent text-color-text-second outline-none font-light" type="text"
                  {...register('password', {
                     required: {
                        value: true,
                        message: 'Ingresa una contraseña valida'
                     },
                     minLength: {
                        value: 5,
                        message: 'La contrseña debe tener al menos 5 caracteres'
                     }
                  })} />
            </div>

            {/* {errors.name && <span>{errors.name.message}</span>}
            {errors.username && <span>{errors.username.message}</span>}
            {errors.password && <span>{errors.password.message}</span>} */}
            <button type="submit" className="cursor-pointer  bg-background-second font-light text-sm py-1 px-3 rounded mt-3">Quiero Registrarme</button>
         </form>
      </div>
   )
}

export default Form

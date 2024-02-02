import { useForm } from "react-hook-form"
import { FormValues } from '../types/formValues'

import { FaUser } from "react-icons/fa";
import { FaUserSecret } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import Input from "../components/Input";
import Button from "../components/Button";

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
            <Input
               name="name"
               icon={<FaUser className="text-color-text-second" />}
               register={register} type="text"
               minLength={2}
               maxLength={20}
               errorMessage="El nombre es requerido" />

            <Input
               name="username"
               icon={<FaUserSecret className="text-color-text-second outline-none" />}
               register={register}
               type="text"
               minLength={2}
               maxLength={20}
               errorMessage="El nombre de usuario es requerido" />

            <Input
               name="password"
               icon={<RiLockPasswordFill className="text-color-text-second" />}
               register={register}
               type="text"
               minLength={5}
               errorMessage="Ingresa una contraseña valida" />

            {errors.name && <span>{errors.name.message}</span>}

            <Button
               type="submit"
               text="Quiero Registrarme" />
         </form>
      </div>
   )
}

export default Form

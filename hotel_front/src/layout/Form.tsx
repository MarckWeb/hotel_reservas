import { useForm } from 'react-hook-form'
import { FormValues } from '../types/formValues'

import { FaUser } from 'react-icons/fa'
import { FaUserSecret } from 'react-icons/fa'
import { RiLockPasswordFill } from 'react-icons/ri'
import { FaArrowLeft } from 'react-icons/fa'

import Input from '../components/Input'
import Button from '../components/Button'
import { ToggleActive } from '../types/toggle'
import loginService from '../services/login'
import { useState } from 'react'

const Form = ({ toggleVisibility }: ToggleActive) => {
   const [showTypeForm, setShowTypeForm] = useState(false)
   const {
      register,
      handleSubmit,
      formState: { errors },
      reset,
   } = useForm<FormValues>()

   const onSubmit = handleSubmit(async (data) => {
      //datos del formulario
      console.log('ingresa')
      console.log(data)
      //hacer en el emvio post con axios
      const userResult = await loginService.registerUser(data)
      if (userResult.success === true) console.log(userResult.message)

      reset()
   })

   const handleLogin = handleSubmit(async (data) => {
      const { name, ...result } = data
      const user = await loginService.loginUser(result)
      window.localStorage.setItem('tokenUser', JSON.stringify(user.data))

      reset()
   })

   return (
      <div className="w-[250px] h-[250px] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-10 bg-gradient-to-b from-zinc-900 via-zinc-700 to-zinc-900 rounded-lg">
         <div className="bg-gradient-to-b from-zinc-900 via-zinc-900 to-zinc-900 text-color-text-second font-light text-center py-2 rounded-t-lg relative">
            <FaArrowLeft
               className="absolute left-3 top-3 text-lg text-background-second cursor-pointer"
               onClick={toggleVisibility}
            />
            <h3>Registro</h3>
         </div>
         <form
            onSubmit={showTypeForm ? handleLogin : onSubmit}
            className={`flex flex-col justify-between  ${showTypeForm ? 'gap-3' : 'gap-1'} items-center mt-4`}
         >
            {showTypeForm ? (
               ''
            ) : (
               <Input
                  name="name"
                  icon={<FaUser className="text-color-text-second" />}
                  register={register}
                  type="text"
                  minLength={2}
                  maxLength={20}
                  errorMessage="El nombre es requerido"
               />
            )}

            <Input
               name="username"
               icon={
                  <FaUserSecret className="text-color-text-second outline-none" />
               }
               register={register}
               type="text"
               minLength={2}
               maxLength={20}
               errorMessage="El nombre de usuario es requerido"
            />

            <Input
               name="password"
               icon={<RiLockPasswordFill className="text-color-text-second" />}
               register={register}
               type="password"
               minLength={5}
               errorMessage="Ingresa una contraseña valida"
            />

            {errors.name && <span>{errors.name.message}</span>}
            {/* si hook */}
            <button
               type="button"
               className="text-xs text-color-text-second font-light ml-auto pr-6 cursor-pointer hover:underline"
               onClick={() => setShowTypeForm(!showTypeForm)}
            >
               {showTypeForm ? 'Registrarme' : 'Iniciar Sesion'}
            </button>

            <Button
               type="submit"
               text={showTypeForm ? 'Iniciar Sesion' : 'Quiero Registrarme'}
            />
         </form>
      </div>
   )
}

export default Form

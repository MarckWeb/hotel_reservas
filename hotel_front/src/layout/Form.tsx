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
import { useAuthContext } from '../context/auth-context'
import { useAlert } from '../context/auth-alert'
import Notifi from '../components/Notifi'

const Form = ({ toggleVisibility }: ToggleActive) => {
  const [showTypeForm, setShowTypeForm] = useState(false)
  const { onLogin } = useAuthContext()
  const { setMessage } = useAlert()
  const [isLoading, setIsLoading] = useState(false) // Nuevo estado para controlar la carga

  // Hook useForm para manejar el registro y la validación del formulario
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>()

  // Función para manejar el envío del formulario de registro
  const onSubmit = handleSubmit(async (data) => {
    setIsLoading(true)
    const userRegister = await loginService.registerUser(data)
    if (userRegister.success === true) setMessage(userRegister.message)

    reset()
  })

  // Función para manejar el inicio de sesión del usuario
  const handleUserLogged = handleSubmit(async (data) => {
    setIsLoading(true)
    const { name, ...result } = data

    const credentials = await loginService.loginUser(result)

    if (credentials.status === 404) {
      setMessage(credentials.message)
      if (toggleVisibility) {
        toggleVisibility()
      }
    } else if (credentials.status === 401) {
      setMessage(credentials.message)
      if (toggleVisibility) {
        toggleVisibility()
      }
    } else {
      onLogin(credentials)
      reset()
      if (toggleVisibility) {
        toggleVisibility()
      }
      setMessage('Bienvenido al Hotel, Disfrutalo!!!')
    }
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
        onSubmit={showTypeForm ? handleUserLogged : onSubmit}
        className={`flex flex-col justify-between  ${showTypeForm ? 'gap-3' : 'gap-1'} items-center mt-4 text-backgroun-title`}
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
            placeholder="Carlos Medina"
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
          placeholder="carlos123"
        />

        <Input
          name="password"
          icon={<RiLockPasswordFill className="text-color-text-second" />}
          register={register}
          type="password"
          minLength={3}
          errorMessage="Ingresa una contraseña valida"
          placeholder="*****"
        />

        {errors.name && <span>{errors.name.message}</span>}

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
      {isLoading && <Notifi onClose={() => setIsLoading(false)} />}
    </div>
  )
}

export default Form

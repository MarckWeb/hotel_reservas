import { useEffect, useState } from 'react'
import Select from './Select'
import { useForm } from 'react-hook-form'
import { prices } from '../services/prices'

import DescriptionMenuCat from './DescriptionMenuCat'
import { createCatering } from '../services/catering'
import { CreateCateringData } from '../types/catering'
import { RootState } from '../app/store'
import { useSelector } from 'react-redux'

const CateringMenu = () => {
  const { register, handleSubmit, setValue } = useForm<CreateCateringData>()
  const [respuesta, setRespuesta] = useState<string>('')
  const user = useSelector((state: RootState) => state.user)

  const [pedido, setPedido] = useState<CreateCateringData>({
    entrance: '',
    first: '',
    second: '',
    desserts: '',
    wines: '',
    drinks: '',
  })

  const onSubmit = async (data: CreateCateringData) => {
    console.log(data)
    setPedido(data)
    try {
      if (user && user[0] && user[0]._id) {
        const newData = {
          ...data,
          userId: user[0]._id,
        }

        const credentials = await createCatering(newData)
        console.log(credentials)

        // if (response.ok) {
        //   setRespuesta(responseData.mensaje)
        // } else {
        //   setRespuesta(`Error: ${responseData.error}`)
        // }
      }
    } catch (error) {
      console.error('Error al enviar los datos:', error)
      setRespuesta('Error al enviar los datos')
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex  flex-col items-center md:items-endm gap-4 md:flex-row"
    >
      <section>
        <Select
          name="entrance"
          label="Entrantes"
          option1="Ensalada de Verdura"
          option2="Vieiras a la plancha"
          option3="Tartaleta de champiñones"
          register={register}
          setValue={setValue}
          setPedido={setPedido}
        />
        <Select
          name="first"
          label="Primeros"
          option1="Risotto de setas salvajes con queso"
          option2="Ensalada de langosta con aguacate"
          option3="Crema de calabaza asada"
          register={register}
          setValue={setValue}
          setPedido={setPedido}
        />
        <Select
          name="second"
          label="Segundos"
          option1="Salmón al horno y puré de patatas"
          option2="Solomillo de ternera a la parrilla"
          option3="Paella marinera con langostinos"
          register={register}
          setValue={setValue}
          setPedido={setPedido}
        />
        <Select
          name="desserts"
          label="Postres"
          option1="Tarta de chocolate negro"
          option2="Crème brûlée de vainilla con caramelo"
          option3="Soufflé de limón con coulis de mango y chantilly"
          register={register}
          setValue={setValue}
          setPedido={setPedido}
        />
        <Select
          name="wines"
          label="Vinos"
          option1="Malbec argentino, cosecha reserva"
          option2="Chardonnay francés, Grand Cru"
          option3="Cabernet Sauvignon chileno, reserva especial"
          register={register}
          setValue={setValue}
          setPedido={setPedido}
        />
        <Select
          name="drinks"
          label="Bebidas"
          option1="Mojito clásico con hojas de menta fresca y lima"
          option2="Martini seco con aceitunas verdes."
          option3="Agua mineral con gas, con una rodaja de limón."
          register={register}
          setValue={setValue}
          setPedido={setPedido}
        />

        {respuesta && <p>{respuesta}</p>}
      </section>
      <DescriptionMenuCat pedido={pedido} />
    </form>
  )
}

export default CateringMenu

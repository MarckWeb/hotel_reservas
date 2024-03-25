import { useState } from 'react'
import Select from './Select'
import { useForm } from 'react-hook-form'
import { menuCatering } from '../services/catering_prices'

import DescriptionMenuCat from './DescriptionMenuCat'
import { createCatering } from '../services/catering'
import { CreateCateringData } from '../types/catering'
import { RootState } from '../app/store'
import { useSelector } from 'react-redux'

const CateringMenu = () => {
  const { register, handleSubmit, setValue } = useForm<CreateCateringData>()
  const [respuesta, setRespuesta] = useState<string>('')
  const user = useSelector((state: RootState) => state.user)

  const [pedido, setPedido] = useState({
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
      }
    } catch (error) {
      console.error('Error al enviar los datos:', error)
      setRespuesta('Error al enviar los datos')
    }
  }

  const handleSelectChange = (category: string) => {
    console.log(category)
    // const selectedItem = menuCatering
    //   .find((item) => item.category === category)
    //   .options.find((option) => option.name === e.target.value)
    // setSelectedItems((prevItems) => [...prevItems, selectedItem])
    // setTotalPrice((prevPrice) => prevPrice + selectedItem.price)
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex  flex-col items-center md:items-endm gap-4 md:flex-row"
    >
      <section>
        {menuCatering.map((categoryItem, index) => (
          <div key={index}>
            <h3>{categoryItem.category}</h3>
            <select onChange={() => handleSelectChange(categoryItem.category)}>
              <option value="">Selecciona un item</option>
              {categoryItem.options.map((option, index) => (
                <option key={index} value={option.name}>
                  {option.name}
                </option>
              ))}
            </select>
          </div>
        ))}

        {respuesta && <p>{respuesta}</p>}
      </section>
      <DescriptionMenuCat pedido={pedido} />
    </form>
  )
}

export default CateringMenu

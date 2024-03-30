import React, { useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io'
import { menuCatering } from '../services/catering_prices'
import { RootState } from '../app/store'
import { useSelector } from 'react-redux'
import DescriptionMenuCat from './DescriptionMenuCat'
import { createCatering } from '../services/catering'
import { useNavigate } from 'react-router-dom'

interface ComandaSelect {
  name: string
  price: number
}

interface PropsCateringMenu {
  isService: boolean
  setIsService: (isService: boolean) => void
}

const CateringMenu: React.FC<PropsCateringMenu> = ({
  isService,
  setIsService,
}) => {
  const user = useSelector((state: RootState) => state.user)
  const [itemsSelected, setItemsSelected] = useState<ComandaSelect[]>([])
  const id = crypto.randomUUID()
  const navigate = useNavigate()

  const handleSelectChange = (
    e: React.ChangeEvent<HTMLSelectElement>,
    category: string,
  ) => {
    const selectOption = e.target.value
    if (selectOption) {
      const filterCategory = menuCatering.find(
        (menu) => menu.category === category,
      )

      const filterOptions = filterCategory?.options.find(
        (option) => option.name === selectOption,
      )

      if (filterOptions) {
        setItemsSelected((prevItems) => [...prevItems, filterOptions])
      }
    }
  }

  const deleteItem = (i: number) => {
    const updatedItems = [...itemsSelected]
    updatedItems.splice(i, 1)

    setItemsSelected(updatedItems)
  }

  const handleItemsSelect = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!user || !user[0] || !user[0]._id) {
      alert('Error al obtener el usuario')
      return
    }

    const objectItems = {
      comandaId: id,
      userId: user[0]._id,
    }

    if (itemsSelected.length > 0) {
      const comandRegister = await createCatering(objectItems)
      console.log(comandRegister)
      if (comandRegister.success === true) {
        setItemsSelected([])
        alert('comanda registrado. Gracias por preferirnos')
        setIsService(!isService)
        navigate('/perfil')
      }
    } else {
      alert('Seleccione algunos items para hacer tu reserva')
    }
  }

  return (
    <form
      onSubmit={handleItemsSelect}
      className="flex  flex-col items-center md:items-endm gap-4 md:flex-row"
    >
      <section>
        {menuCatering &&
          menuCatering.map((categoryItem, index) => (
            <div
              className=" flex flex-col gap-1 text-color-text-second"
              key={index}
            >
              <h3 className="text-background-second">
                {categoryItem.category.toUpperCase()}
              </h3>
              <div className="relative items-center h-10 w-56 leading-7 bg-black overflow-hidden rounded-md">
                <select
                  className="outline-none bg-transparent cursor-pointer appearance-none absolute top-1 left-0 w-full px-3"
                  onChange={(e) => handleSelectChange(e, categoryItem.category)}
                >
                  <option defaultValue="selecciona" value="">
                    Selecciona
                  </option>
                  {categoryItem.options.map((option, index) => (
                    <option key={index} value={option.name}>
                      {option.name}
                    </option>
                  ))}
                </select>
                <div className="w-6 h-6 bg-background-second rounded grid absolute top-2 right-1">
                  <IoIosArrowDown className="text-backgroun-title font-bold m-auto" />
                </div>
              </div>
            </div>
          ))}
      </section>
      <DescriptionMenuCat
        itemsSelected={itemsSelected}
        deleteItem={deleteItem}
        comandaId={id}
      />
    </form>
  )
}

export default CateringMenu

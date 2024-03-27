import React, { useState } from 'react'
import { menuCatering } from '../services/catering_prices'
import { RootState } from '../app/store'
import { useSelector } from 'react-redux'
import DescriptionMenuCat from './DescriptionMenuCat'
interface ComandaSelect {
  name: string
  price: number
}

const CateringMenu = () => {
  const user = useSelector((state: RootState) => state.user)
  const [itemsSelected, setItemsSelected] = useState<ComandaSelect[]>([])
  const id = crypto.randomUUID()

  const handleSelectChange = (
    e: React.ChangeEvent<HTMLSelectElement>,
    category: string,
  ) => {
    const selectOption = e.target.value
    if (selectOption) {
      const filterCategory = menuCatering.find(
        (menu) => menu.category == category,
      )

      const filterOptions = filterCategory?.options.find(
        (option) => option.name == selectOption,
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

  const handleItemsSelect = (e: React.FormEvent) => {
    e.preventDefault()
    const objectItems = {
      comandaId: id,
      userId: user[0]._id,
    }

    console.log(objectItems)
  }

  return (
    <form
      onSubmit={handleItemsSelect}
      className="flex  flex-col items-center md:items-endm gap-4 md:flex-row"
    >
      <section>
        {menuCatering &&
          menuCatering.map((categoryItem, index) => (
            <div key={index}>
              <h3>{categoryItem.category.toUpperCase()}</h3>
              <select
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

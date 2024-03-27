import { useState } from 'react'
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

  const handleSelectChange = (
    e: React.ChangeEvent<HTMLSelectElement>,
    category: string,
  ) => {
    console.log(category)
    console.log(e.target.value)
    const selectOption = e.target.value
    if (selectOption) {
      console.log(menuCatering)
      const filterCategory = menuCatering.find(
        (menu) => menu.category == category,
      )

      const filterOptions = filterCategory?.options.find(
        (option) => option.name == selectOption,
      )

      if (filterOptions) {
        setItemsSelected((prevItems) => [...prevItems, filterOptions])

        console.log(filterCategory)
        console.log(filterOptions)
      }
    }
  }

  console.log(itemsSelected)

  return (
    <form className="flex  flex-col items-center md:items-endm gap-4 md:flex-row">
      <section>
        {menuCatering &&
          menuCatering.map((categoryItem, index) => (
            <div key={index}>
              <h3>{categoryItem.category}</h3>
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
      <DescriptionMenuCat itemsSelected={itemsSelected} />
    </form>
  )
}

export default CateringMenu

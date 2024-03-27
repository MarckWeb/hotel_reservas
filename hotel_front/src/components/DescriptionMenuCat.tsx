import Button from './Button'
import { PiBowlFoodBold } from 'react-icons/pi'
import { IoFastFoodOutline } from 'react-icons/io5'
import { SiIfood } from 'react-icons/si'
import { RiDeleteBin2Fill } from 'react-icons/ri'
import { useEffect, useState } from 'react'

interface itemsObject {
  name: string
  price: number
}
type DescriptionMenuCatProps = {
  itemsSelected: Array<itemsObject>
  deleteItem: (i: number) => void
  comandaId: string
}

const DescriptionMenuCat: React.FC<DescriptionMenuCatProps> = ({
  itemsSelected,
  deleteItem,
  comandaId,
}) => {
  const [totalPrice, setTotalPrice] = useState<number>()
  // fecha de la comanda
  const date = new Date()
  const formattedDate = date.toLocaleDateString()

  useEffect(() => {
    if (itemsSelected) {
      const subtotal = itemsSelected.map((item) => item.price)
      const total = subtotal.reduce((acu, item) => acu + item, 0)
      setTotalPrice(total)
    }
  }, [itemsSelected])

  return (
    <section className="w-full h-full md:max-h-[450px] overflow-auto bg-[#1F1F1F] text-white font-light p-2 md:rounded-lg ">
      <div className="flex flex-row justify-between items-center ">
        <div className="text-xs">
          <p>
            <span>Fecha:</span> <span>{formattedDate}</span>
          </p>
          <p>Nº Comanda: {comandaId.slice(24)}</p>
        </div>
        <div className="flex gap-2 text-xl text-background-second">
          <PiBowlFoodBold />
          <IoFastFoodOutline />
          <SiIfood />
        </div>
      </div>
      <article className="text-center flex flex-col gap-2">
        <h2 className="text-background-second text-lg italic">Comanda</h2>
        <table className=" w-full border-separate">
          <thead>
            <tr className="bg-black">
              <td className="pl-2 text-background-second">
                <RiDeleteBin2Fill />
              </td>
              <th>Detalle</th>
              <th>#</th>
              <th className="hidden md:block">Precio</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {itemsSelected &&
              itemsSelected.map((items, i) => {
                return (
                  <tr key={i} className="bg-[#151515] text-sm">
                    <td
                      className="text-black font-extrabold text-lg hover:text-color-text-second cursor-pointer"
                      onClick={() => deleteItem(i)}
                    >
                      x
                    </td>

                    <td className="italic text-left pl-3">{items.name}</td>
                    <td>{i + 1}</td>
                    <td className="hidden md:block">{items.price}</td>
                    <td className="text-background-second">{items.price}</td>
                  </tr>
                )
              })}
          </tbody>
        </table>

        <div className="ml-auto ">
          <p className="flex flex-row items-center gap-5">
            <span className="text-xs">Sub-Total:</span>{' '}
            <span>{totalPrice?.toFixed(2)} €</span>
          </p>
          <p className="flex flex-row items-center gap-5">
            <span className="text-xs">IVA 5%:</span>{' '}
            <span>{totalPrice && ((totalPrice * 5) / 100).toFixed(2)} €</span>
          </p>
        </div>

        <div className="flex flex-row-reverse justify-between items-center">
          <p>
            <span>Total:</span>{' '}
            <span className="text-background-second text-xl bg-black font-bold px-1">
              {totalPrice && ((totalPrice * 5) / 100 + totalPrice).toFixed(2)}€
            </span>
          </p>
          <Button type="submit" text="Realizar Comanda" />
        </div>
      </article>
    </section>
  )
}

export default DescriptionMenuCat

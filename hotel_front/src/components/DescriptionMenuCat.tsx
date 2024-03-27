import Button from './Button'
import { PiBowlFoodBold } from 'react-icons/pi'
import { IoFastFoodOutline } from 'react-icons/io5'
import { SiIfood } from 'react-icons/si'
import { RiDeleteBin2Fill } from 'react-icons/ri'

interface itemsObject {
  name: string
  price: number
}
type DescriptionMenuCatProps = {
  itemsSelected: Array<itemsObject>
}

const DescriptionMenuCat: React.FC<DescriptionMenuCatProps> = ({
  itemsSelected,
}) => {
  // fecha de la comanda
  const date = new Date()
  const locale = 'es-ES'
  const formattedDate = date.toLocaleDateString(locale)
  console.log(itemsSelected)
  return (
    <section className=" w-full h-full md:max-h-[380px] bg-[#1F1F1F] text-white font-light p-2 rounded-lg ">
      <div className="flex flex-row justify-between items-center ">
        <div className="text-xs">
          <p>
            <span>Fecha:</span> <span>{formattedDate}</span>
          </p>
          <p>Nº Comanda: 2155866666</p>
        </div>
        <div className="flex gap-2 text-xl text-background-second">
          <PiBowlFoodBold />
          <IoFastFoodOutline />
          <SiIfood />
        </div>
      </div>
      <article className="text-center flex flex-col gap-2">
        <h2 className="text-background-second text-2xl italic">Comanda</h2>
        <table className=" w-full border-separate ">
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
                  <tr key={i} className="bg-[#151515]">
                    <td className="text-black font-extrabold text-lg hover:text-color-text-second cursor-pointer">
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
          {/* <tbody>
            {pedido.entrance && (
              <tr className="bg-[#151515]">
                <td className="text-black font-extrabold text-lg hover:text-color-text-second cursor-pointer">
                  x
                </td>

                <td className="italic text-left pl-3">{pedido.entrance}</td>
                <td>1</td>
                <td className="hidden md:block">12</td>
                <td className="text-background-second">12</td>
              </tr>
            )}
            {pedido.first && (
              <tr className="bg-[#151515]">
                <td className="text-black font-extrabold text-lg hover:text-color-text-second cursor-pointer">
                  x
                </td>
                <td className="italic text-left pl-3">{pedido.first}</td>
                <td>2</td>
                <td className="hidden md:block">12</td>
                <td className="text-background-second">12</td>
              </tr>
            )}
            {pedido.second && (
              <tr className="bg-[#151515]">
                <td className="text-black font-extrabold text-lg hover:text-color-text-second cursor-pointer">
                  x
                </td>
                <td className="italic text-left pl-3">{pedido.second}</td>
                <td>3</td>
                <td className="hidden md:block">15</td>
                <td className="text-background-second">15</td>
              </tr>
            )}

            {pedido.desserts && (
              <tr className="bg-[#151515]">
                <td className="text-black font-extrabold text-lg hover:text-color-text-second cursor-pointer">
                  x
                </td>
                <td className="italic text-left pl-3">{pedido.desserts}</td>
                <td>4</td>
                <td className="hidden md:block">26</td>
                <td className="text-background-second">26</td>
              </tr>
            )}

            {pedido.wines && (
              <tr className="bg-[#151515]">
                <td className="text-black font-extrabold text-lg hover:text-color-text-second cursor-pointer">
                  x
                </td>
                <td className="italic text-left pl-3">{pedido.wines}</td>
                <td>5</td>
                <td className="hidden md:block">25</td>
                <td className="text-background-second">25</td>
              </tr>
            )}
          </tbody> */}
        </table>

        <div className="ml-auto ">
          <p className="flex flex-row items-center gap-5">
            <span className="text-xs">Sub-Total:</span> <span>125.2</span>
          </p>
          <p className="flex flex-row items-center gap-5">
            <span className="text-xs">IVA:</span> <span>12.15 €</span>
          </p>
        </div>

        <div className="flex flex-row-reverse justify-between items-center">
          <p>
            <span>Total:</span>{' '}
            <span className="text-background-second text-xl bg-black font-bold px-1">
              57.40€
            </span>
          </p>
          <Button type="submit" text="Realizar Comanda" />
        </div>
      </article>
    </section>
  )
}

export default DescriptionMenuCat

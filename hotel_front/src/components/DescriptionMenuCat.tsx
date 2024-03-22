import Button from './Button'
import { PiBowlFoodBold } from 'react-icons/pi'
import { IoFastFoodOutline } from 'react-icons/io5'
import { SiIfood } from 'react-icons/si'
import { RiDeleteBin2Fill } from 'react-icons/ri'
import { useEffect } from 'react'
import { initializeCatering } from '../reducer/catering/catering'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../app/store'
import { CreateCateringData } from '../types/catering'

type DescriptionMenuCatProps = {
  pedido: CreateCateringData
}

const DescriptionMenuCat: React.FC<DescriptionMenuCatProps> = ({ pedido }) => {
  const distpach = useDispatch<AppDispatch>()
  const catering = useSelector((state: RootState) => state.catering)
  console.log(catering)
  useEffect(() => {
    distpach(initializeCatering())
  }, [distpach])

  // fecha de la comanda
  const date = new Date()
  const locale = 'es-ES'
  const formattedDate = date.toLocaleDateString(locale)

  console.log(date)
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
            {pedido.entrance && (
              <tr className="bg-[#151515]">
                <td className="text-black font-extrabold text-lg hover:text-color-text-second cursor-pointer">
                  x
                </td>

                <td className="italic text-left pl-3">{pedido.entrance}</td>
                <td>1</td>
                <td className="hidden md:block">15 €</td>
                <td className="text-background-second">15 €</td>
              </tr>
            )}
            {pedido.first && (
              <tr className="bg-[#151515]">
                <td className="text-black font-extrabold text-lg hover:text-color-text-second cursor-pointer">
                  x
                </td>
                <td className="italic text-left pl-3">{pedido.first}</td>
                <td>1</td>
                <td className="hidden md:block">15 €</td>
                <td className="text-background-second">15 €</td>
              </tr>
            )}
            {pedido.second && (
              <tr className="bg-[#151515]">
                <td className="text-black font-extrabold text-lg hover:text-color-text-second cursor-pointer">
                  x
                </td>
                <td className="italic text-left pl-3">{pedido.second}</td>
                <td>1</td>
                <td className="hidden md:block">15 €</td>
                <td className="text-background-second">15 €</td>
              </tr>
            )}

            {pedido.desserts && (
              <tr className="bg-[#151515]">
                <td className="text-black font-extrabold text-lg hover:text-color-text-second cursor-pointer">
                  x
                </td>
                <td className="italic text-left pl-3">{pedido.desserts}</td>
                <td>1</td>
                <td className="hidden md:block">22.25 €</td>
                <td className="text-background-second">22.25 €</td>
              </tr>
            )}

            {pedido.wines && (
              <tr className="bg-[#151515]">
                <td className="text-black font-extrabold text-lg hover:text-color-text-second cursor-pointer">
                  x
                </td>
                <td className="italic text-left pl-3">{pedido.wines}</td>
                <td>1</td>
                <td className="hidden md:block">15 €</td>
                <td className="text-background-second">15 €</td>
              </tr>
            )}
          </tbody>
        </table>

        <div className="ml-auto ">
          <p className="flex flex-row items-center gap-5">
            <span className="text-xs">Sub-Total:</span> <span>42.25 €</span>
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

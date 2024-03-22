import Button from './Button'
import { PiBowlFoodBold } from 'react-icons/pi'
import { IoFastFoodOutline } from 'react-icons/io5'
import { SiIfood } from 'react-icons/si'
import { RiDeleteBin2Fill } from 'react-icons/ri'
import { useEffect } from 'react'
import { initializeCatering } from '../reducer/catering/catering'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../app/store'

const DescriptionMenuCat = () => {
  const distpach = useDispatch<AppDispatch>()
  const catering = useSelector((state: RootState) => state.catering)
  console.log(catering)
  useEffect(() => {
    distpach(initializeCatering())
  }, [distpach])
  return (
    <section className=" w-full h-full bg-black text-white font-light p-2 rounded-lg">
      <div className="flex flex-row justify-between items-center border">
        <div className="text-xs">
          <p>fecha 30 nov 2023</p>
          <p>Nº Comanda 2155866666</p>
        </div>
        <div className="flex gap-2 text-xl text-background-second">
          <PiBowlFoodBold />
          <IoFastFoodOutline />
          <SiIfood />
        </div>
      </div>
      <article className="text-center flex flex-col gap-2">
        <h2 className="text-background-second text-2xl italic">Comanda</h2>
        <table className="border w-full">
          <thead>
            <tr>
              <td>del</td>
              <th>Detalle</th>
              <th>#</th>
              <th>Precio</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <RiDeleteBin2Fill />
              </td>

              <td>Ensalada de aiutm</td>
              <td>1</td>
              <td>15 E</td>
              <td>15 E</td>
            </tr>
            <tr>
              <td>
                <RiDeleteBin2Fill />
              </td>
              <td>Ensalada de aiutm</td>
              <td>1</td>
              <td>15 E</td>
              <td>15 E</td>
            </tr>
            <tr>
              <td>
                <RiDeleteBin2Fill />
              </td>
              <td>Ensalada de aiutm</td>
              <td>1</td>
              <td>15 E</td>
              <td>15 E</td>
            </tr>
          </tbody>
        </table>

        <div className="ml-auto">
          <p>
            <span>Sub-Total:</span> <span>42.25 E</span>
          </p>
          <p>
            <span>IVA:</span> <span>12.15 E</span>
          </p>
        </div>

        <div className="flex flex-row-reverse justify-between items-center">
          <p>
            <span>Total:</span> <span>57.40E</span>
          </p>
          <Button type="button" text="Realizar Comanda" />
        </div>
      </article>
    </section>
  )
}

export default DescriptionMenuCat

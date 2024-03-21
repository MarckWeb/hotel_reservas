import { useParams } from 'react-router-dom'
import CateringMenu from '../components/CateringMenu'
import DescriptionMenuCat from '../components/DescriptionMenuCat'
import Food from '../assets/food.jpg'

const CateringService = () => {
  const { serviceId } = useParams()
  console.log(serviceId)
  return (
    <section className="w-full h-screen bg-servicio-background bg-cover md:overflow-hidden flex flex-col">
      <article className="w-full max-w-[900px] mx-auto mt-16 bg-background-cards border border-border-cards rounded-xl md:p-4 flex flex-col gap-2">
        <div className="md:flex md:flex-row">
          <CateringMenu />
          <DescriptionMenuCat />
        </div>
        <div className="w-full h-52 overflow-hidden md:rounded-lg relative bg-food-background bg-center bg-cover">
          <p className="bg-backgroun-title w-full h-20 absolute top-[50%] left-0 translate-y-[-50%] text-white text-xl p-4">
            Nuestros mejores platos, en su habitacion. <br /> Bon Appétit
          </p>
        </div>
      </article>

      <section></section>
    </section>
  )
}

export default CateringService

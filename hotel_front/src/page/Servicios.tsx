import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { initializeServices } from '../reducer/service/service'
import { AppDispatch, RootState } from '../app/store'
import { service } from '../assets/footer/index'

import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'

import Card from '../components/Card'
import Footer from '../layout/Footer'
import CateringService from '../layout/CateringService'
import { responsive } from '../responsive/responsive'
import { useAlert } from '../context/auth-alert'

const Servicios = () => {
  const disptach = useDispatch<AppDispatch>()
  const services = useSelector((state: RootState) => state.services)
  const [isService, setIsService] = useState<boolean>(false)
  const { setMessage } = useAlert()

  useEffect(() => {
    disptach(initializeServices())
  }, [disptach])

  const handleIsSevice = (type: string) => {
    if (type != 'Catering') {
      setMessage(
        'Estoy trabajando en esta sección. ¡Gracias por probar mi aplicación!',
      )
    } else {
      setIsService(!isService)
    }
  }

  return (
    <section className="w-full h-screen bg-servicio-background bg-cover md:overflow-hidden flex flex-col relative">
      <article className="pl-[40px] md:pl-[35px] mt-[80px]">
        <AliceCarousel
          mouseTracking
          responsive={responsive}
          items={services.map((service) => (
            <Card
              key={service._id}
              id={service._id}
              title={service.title}
              description={service.description}
              image={service.image}
              onClick={handleIsSevice}
            />
          ))}
          disableButtonsControls
          disableDotsControls
        />
      </article>
      <Footer
        icon={service}
        title="Experimente todas la nuevas sensaciones con nuestro servicio"
        subtitle="Servicios excelentes y de calidad"
      />
      {isService && (
        <CateringService isService={isService} setIsService={setIsService} />
      )}
    </section>
  )
}

export default Servicios

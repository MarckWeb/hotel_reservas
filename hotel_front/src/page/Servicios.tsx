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

const Servicios = () => {
  const disptach = useDispatch<AppDispatch>()
  const services = useSelector((state: RootState) => state.services)
  const [isService, setIsService] = useState<boolean>(false)

  useEffect(() => {
    disptach(initializeServices())
  }, [disptach])

  const responsive = {
    0: { items: 1 },
    600: { items: 2 },
    800: { items: 3 },
    1300: { items: 4 },
  }

  const handleIsSevice = (type: string) => {
    if (type != 'Catering') {
      alert('Estoy trabajando en esta secciòn, Gracias por probar mi app')
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
        title="Experiemente todas la nuevas sensaciones con nuestro servicio"
        subtitle="Servicios exelentes y de calidad"
      />
      {isService && (
        <CateringService isService={isService} setIsService={setIsService} />
      )}
    </section>
  )
}

export default Servicios

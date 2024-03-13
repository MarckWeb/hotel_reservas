import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { initializeServices } from '../reducer/service/service'
import { AppDispatch, RootState } from '../app/store'
import { service } from '../assets/footer/index'

import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'

import Card from '../components/Card'
import Footer from '../layout/Footer'

const Servicios = () => {
  const disptach = useDispatch<AppDispatch>()
  const services = useSelector((state: RootState) => state.services)

  useEffect(() => {
    disptach(initializeServices())
  }, [disptach])

  const responsive = {
    0: { items: 1 },
    600: { items: 2 },
    800: { items: 3 },
    1300: { items: 4 },
  }

  return (
    <section className="w-full h-screen bg-servicio-background bg-cover overflow-hidden flex flex-col">
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
    </section>
  )
}

export default Servicios

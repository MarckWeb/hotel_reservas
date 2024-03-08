import { nearbyBusinesses } from '../assets/businesImg'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import Button from '../components/Button'

const Business = () => {
  const responsive = {
    0: { items: 1 },
    600: { items: 2 },
    800: { items: 3 },
    1300: { items: 4 },
  }

  return (
    <section className="w-full h-screen bg-business-background bg-cover py-20">
      <article className="pl-[20px] md:pl-[35px] ">
        <AliceCarousel
          mouseTracking
          responsive={responsive}
          items={
            nearbyBusinesses &&
            nearbyBusinesses.map((business) => {
              return (
                <article className="relative w-80 h-[31.25rem]  border border-border-cards p-3 rounded-lg bg-background-cards text-sm">
                  <img
                    className="w-full h-full pointer-events-none rounded"
                    src={business.image}
                    alt=""
                  />
                  <section className="absolute bottom-20 bg-background-cards font-extralight p-4">
                    <h2 className="text-background-second mb-3">
                      {business.title}
                    </h2>
                    <p className="text-color-text-primary ">
                      {business.description}
                    </p>
                    <Button type="button" text="Ver Ubicacion" />
                  </section>
                </article>
              )
            })
          }
          disableButtonsControls
          disableDotsControls
        ></AliceCarousel>
      </article>
    </section>
  )
}

export default Business

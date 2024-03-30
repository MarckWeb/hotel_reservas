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
                    <a
                      href="https://www.google.es/maps/place/Hotel+Gran+Bilbao/@43.2633235,-2.9335644,13z/data=!4m18!1m8!3m7!1s0xd4e4e27664b89b9:0x6534acc41e95a645!2sBilbao,+Vizcaya!3b1!8m2!3d43.2630126!4d-2.9349852!16zL20vMGh0cXQ!3m8!1s0xd4e4e35d93f2259:0x43ebff410cb03786!5m2!4m1!1i2!8m2!3d43.2491191!4d-2.9198241!16s%2Fg%2F11c2941btw?entry=ttu"
                      target="_blanck"
                    >
                      <Button type="button" text="Ver Ubicacion" />
                    </a>
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

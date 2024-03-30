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
                      href="https://www.google.es/maps/place/Berango,+Vizcaya/@43.3621804,-2.9946542,15z/data=!3m1!4b1!4m14!1m7!3m6!1s0xd4e5bbbc7fda6db:0x9eee87df98562834!2sCentro+Comercial+Artea!8m2!3d43.3413132!4d-2.9892845!16s%2Fg%2F1tdcydf8!3m5!1s0xd4e5b8c7b36e1f3:0x6390516941429fc!8m2!3d43.360067!4d-2.9973977!16s%2Fg%2F11cn5psj6h?entry=ttu"
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

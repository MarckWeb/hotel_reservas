import { nearbyBusinesses } from '../assets/businesImg'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import Button from '../components/Button'
import { responsive } from '../responsive/responsive'
import React from 'react'

const Business: React.FC = () => {
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
                <section className="w-72 h-[31.25rem]  border border-border-cards p-2 rounded-lg bg-background-cards text-sm">
                  <figure className="pb-[18.75rem] relative">
                    <img
                      className=" absolute w-full h-full object-cover pointer-events-none select-text rounded-[4px]"
                      src={business.image}
                      alt="Imagen habitacion"
                    />
                  </figure>

                  <div className="p-2 flex flex-col h-[12.5rem]">
                    <h3 className="text-background-second mb-1">
                      {business.title}
                    </h3>
                    <p className="text-white font-extralight">
                      {business.description}
                    </p>

                    <Button type="button" text="Ver Ubicacion" />
                  </div>
                </section>
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

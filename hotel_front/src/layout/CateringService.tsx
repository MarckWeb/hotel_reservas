import React from 'react'
import CateringMenu from '../components/CateringMenu'

interface PropsCateringService {
  isService: boolean
  setIsService: (isService: boolean) => void
}

const CateringService: React.FC<PropsCateringService> = ({
  isService,
  setIsService,
}) => {
  return (
    <section className="w-full h-screen bg-servicio-background bg-cover md:overflow-hidden flex flex-col  absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
      <article className="w-full max-w-[900px] mx-auto mt-16 bg-background-cards border border-border-cards rounded-xl md:p-4 flex flex-col  gap-2">
        <CateringMenu isService={isService} setIsService={setIsService} />

        <div className="w-full h-36 overflow-hidden md:rounded-lg relative bg-food-background bg-center bg-cover">
          <p className="bg-backgroun-title w-full h-20 absolute top-[50%] left-0 translate-y-[-50%] text-white text-xl p-4">
            Nuestros mejores platos, en su habitacion. <br /> Bon Appétit
          </p>
        </div>
      </article>
    </section>
  )
}

export default CateringService

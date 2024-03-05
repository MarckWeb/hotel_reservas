import Gallery from '../components/Gallery'
import Location from '../components/Location'
import Info from '../components/Info'

const InfoHotel = () => {
  return (
    <section className="w-full h-screen bg-main-background bg-cover bg-no-repeat bg-left md:overflow-hidden relative py-16">
      <article className="w-full max-w-[900px] m-auto bg-background-cards border border-border-cards text-sm md:text-base p-3 text-white font-light pb-4 md:grid  md:grid-rows-[200px, auto] md:grid-cols-3 rounded-xl">
        <figure className="md:col-span-2">
          <img
            className="w-full h-full object-cover rounded-t-lg"
            src="https://res.cloudinary.com/datu6oki6/image/upload/v1709576355/ciudad-ciencias_fhi7q8.jpg"
            alt=""
          />
        </figure>

        <Location />

        <Info />

        <Gallery />
      </article>
    </section>
  )
}

export default InfoHotel

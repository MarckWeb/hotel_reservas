import Blog from '../components/Blog'
import { blogOne, blogTwo } from '../assets/img-gallery'
import { useAuthContext } from '../context/auth-context'
import { useNavigate } from 'react-router-dom'
import { useAlert } from '../context/auth-alert'

const Home = () => {
  const { userExist } = useAuthContext()
  const { setMessage } = useAlert()

  const navigation = useNavigate()

  const handleNavigationReserva = () => {
    if (userExist) {
      navigation('/reservas')
    } else {
      setMessage('Registrate o Inicia sesion')
    }
  }

  return (
    <div className="bg-main-background w-full h-full bg-cover bg-no-repeat bg-left flex flex-row">
      <h1 className="absolute md:relative z-10 mt-[400px] md:mt-[420px] w-full h-[180px] md:h-[198px] grid items-center text-4xl md:text-4xl text-color-text-primary pl-2 bg-backgroun-title border-l-[20px] border-background-second leading-[3rem] lg:text-6xl ">
        Disfruta de los grandes placeres del Hotel
      </h1>

      <div className="w-[300px] md:w-[450px] ml-auto">
        <button
          className="bg-background-second w-full border-l-[15px] border-[#946002] h-[70px] my-6 text-xl hover:text-white"
          onClick={handleNavigationReserva}
        >
          Haz tu reserva desde aqui
        </button>

        <section className="bg-[#262626]">
          <article className="hidden md:block">
            <Blog
              img={blogOne}
              alt="imagen del primer blog"
              title="El Hotel Perfecto en tus Próximas Vacaciones"
              content="Descubre los secretos para encontrar el alojamiento ideal para tus vacaciones soñadas. Desde la ubicación y servicios hasta las opiniones de otros viajeros."
            />
          </article>

          <article className=" mt-8 ">
            <Blog
              img={blogTwo}
              alt="imagen del primer blog"
              title="Innovación y Elegancia"
              content="Sumérgete en las últimas tendencias de diseño de interiores que están revolucionando el mundo de la hotelería este año, Desde espacios minimalistas hasta la incorporación de tecnología de vanguardia.  "
            />
          </article>
        </section>
      </div>
    </div>
  )
}

export default Home

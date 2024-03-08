import Blog from '../components/Blog'
import ImageOne from '../assets/image1.jpg'
import ImageTwo from '../assets/image2.jpg'
import { useAuthContext } from '../context/auth-context'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const { userExist } = useAuthContext()

  const navigation = useNavigate()

  console.log(userExist)
  const handleNavigationReserva = () => {
    if (userExist) {
      navigation('/reservas')
    } else {
      alert('Registrate o Inicia sesion')
    }
  }

  return (
    <div className="bg-main-background w-full h-full bg-cover bg-no-repeat bg-left flex flex-row">
      <h1 className="absolute md:relative z-10 mt-[400px] md:mt-[420px] w-full h-[180px] md:h-[198px] grid items-center text-4xl md:text-4xl text-color-text-primary pl-2 bg-backgroun-title border-l-[20px] border-background-second leading-[3rem] lg:text-6xl ">
        Disfruta de los grandes placeres del Hotel
      </h1>

      <div className="w-[300px] md:w-[450px] ml-auto">
        <button
          className="bg-background-second w-full border-l-[15px] border-[#946002] h-[70px] my-6 text-xl"
          onClick={handleNavigationReserva}
        >
          Haz tu reserva desde aqui
        </button>

        <section className="bg-[#262626]">
          <article className="hidden md:block">
            <Blog
              img={ImageOne}
              alt="imagen del primer blog"
              title="Lorem lorem"
              content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id quam sapiente, itaque sequi facere hic iste alias quo temporibus? "
            />
          </article>

          <article className=" mt-14 ">
            <Blog
              img={ImageTwo}
              alt="imagen del primer blog"
              title="Lorem lorem"
              content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id quam sapiente, itaque sequi facere hic iste alias quo temporibus? "
            />
          </article>
        </section>
      </div>
    </div>
  )
}

export default Home

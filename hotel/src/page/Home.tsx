import Blog from "../components/Blog"
import ImageOne from '../assets/image1.jpg'
import ImageTwo from '../assets/image2.jpg'


const Home = () => {
   return (
      <div className="bg-main-background w-full h-full bg-cover bg-no-repeat bg-left flex flex-row">


         <h1 className="mt-[400px] w-full h-[150px] grid items-center text-4xl text-color-text-primary pl-2 bg-backgroun-title border-l-[20px] border-background-second">Disruta de los placeres del Hotel</h1>

         <div className="w-[450px] ml-auto">

            <button className="bg-background-second w-full border-l-[15px] border-[#946002] h-[50px]">Haz tu reserva desde aqui</button>

            <section className="hidden md:block" >

               <Blog
                  img={ImageOne}
                  alt='imagen del primer blog'
                  title='Lorem lorem'
                  content='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id quam sapiente, itaque sequi facere hic iste alias quo temporibus? ' />
               <Blog
                  img={ImageTwo}
                  alt='imagen del primer blog'
                  title='Lorem lorem'
                  content='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id quam sapiente, itaque sequi facere hic iste alias quo temporibus? ' />
            </section>
         </div>
      </div>
   )
}

export default Home

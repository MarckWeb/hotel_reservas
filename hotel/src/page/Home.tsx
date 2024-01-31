import Blog from "../components/Blog"
import ImageOne from '../assets/image1.jpg'
import ImageTwo from '../assets/image2.jpg'


const Home = () => {
   return (
      <div className="bg-main-background w-full h-full bg-cover bg-no-repeat bg-left flex flex-row border border-red-700">


         <h1 className="mt-[400px] w-full h-[150px] bg-slate-400 border-l-[20px] border-color-second">Disruta de los placeres del Hotel</h1>

         <div className="w-[450px] ml-auto border border-yellow-400">

            <button className="bg-yellow-800 w-full">Haz tu reserva desde aqui</button>

            <section className=" hidden md:block" >

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

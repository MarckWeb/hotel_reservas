import {
  galleryOne,
  galleryTwo,
  galleryThree,
  galleryFour,
  galleryFive,
  gallerySix,
} from '../assets'
import Button from './Button'

const Gallery = () => {
  return (
    <section className="md:col-span-1 bg-gradient-to-b from-zinc-900 via-zinc-700 to-zinc-900 p-4">
      <h3 className="text-background-second mb-4">Galeria de Imagenes</h3>
      <figure className="grid grid-cols-3 md:grid-cols-2 gap-1 mb-4">
        <img className="rounded w-full h-full" src={galleryOne} alt="" />
        <img className="rounded w-full h-full" src={galleryTwo} alt="" />
        <img className="rounded w-full h-full" src={galleryThree} alt="" />
        <img className="rounded w-full h-full" src={galleryFour} alt="" />
        <img className="rounded w-full h-full" src={galleryFive} alt="" />
        <img className="rounded w-full h-full" src={gallerySix} alt="" />
      </figure>

      <Button type="button" text="Ver opiniones clientes" />
    </section>
  )
}

export default Gallery

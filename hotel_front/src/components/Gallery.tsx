import {
  galleryOne,
  galleryTwo,
  galleryThree,
  galleryFour,
  galleryFive,
  gallerySix,
} from '../assets'

const Gallery = () => {
  return (
    <figure className="grid grid-cols-3 gap-1 md:col-span-3">
      <img className="rounded w-full h-full" src={galleryOne} alt="" />
      <img className="rounded w-full h-full" src={galleryTwo} alt="" />
      <img className="rounded w-full h-full" src={galleryThree} alt="" />
      <img className="rounded w-full h-full" src={galleryFour} alt="" />
      <img className="rounded w-full h-full" src={galleryFive} alt="" />
      <img className="rounded w-full h-full" src={gallerySix} alt="" />
    </figure>
  )
}

export default Gallery

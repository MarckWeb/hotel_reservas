import React from 'react'
import { galleryImages } from '../assets/img-gallery'
import Button from './Button'

const Gallery: React.FC = () => {
  return (
    <section className="md:col-span-1 bg-gradient-to-b from-zinc-900 via-zinc-700 to-zinc-900 p-4">
      <h3 className="text-background-second mb-4">Galeria de Imagenes</h3>

      <figure className="grid grid-cols-3 md:grid-cols-2 gap-1 mb-4">
        {galleryImages &&
          galleryImages.map((img, i) => {
            return (
              <img key={i} className="rounded w-full h-full" src={img} alt="" />
            )
          })}
      </figure>

      <Button type="button" text="Ver opiniones clientes" />
    </section>
  )
}

export default Gallery

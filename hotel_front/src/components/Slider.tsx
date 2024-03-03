import React, { useState } from 'react'

interface PropsSlider {
  images: Array<string>
}

const Slider: React.FC<PropsSlider> = ({ images }) => {
  const [startX, setStartX] = useState<number | null>(null)
  const [scrollLeft, setScrollLeft] = useState<number>(0)

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    console.log('evento touvh start')
    console.log(e)
    console.log(e.currentTarget)
    setStartX(e.touches[0].clientX)
    setScrollLeft(e.currentTarget.scrollLeft)
  }

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    console.log('evento touvh')
    console.log(e)
    if (!startX) return
    const x = e.touches[0].clientX
    const walk = (x - startX) * 1.5
    e.currentTarget.scrollLeft = scrollLeft - walk
  }

  return (
    <figure
      className="col-span-3 flex gap-2 overflow-hidden border "
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
    >
      {images &&
        images.map((img, i) => {
          return (
            <img key={i} className="rounded-t-lg w-full" src={img} alt="" />
          )
        })}
    </figure>
  )
}

export default Slider

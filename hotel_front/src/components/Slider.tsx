import React, { useState } from 'react'
import { IoMdArrowDroprightCircle } from 'react-icons/io'
import { IoMdArrowDropleftCircle } from 'react-icons/io'

interface PropsSlider {
  images: Array<string>
}

const Slider: React.FC<PropsSlider> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0)

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1,
    )
  }

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1,
    )
  }

  return (
    <div className="col-span-3 relative">
      <button className="absolute top-[50%] left-2" onClick={handlePrevious}>
        <IoMdArrowDropleftCircle className="text-3xl text-background-second" />
      </button>
      <button className="absolute top-[50%] right-2" onClick={handleNext}>
        <IoMdArrowDroprightCircle className="text-3xl text-background-second" />
      </button>
      <figure className=" w-full h-full overflow-x-hidden">
        {images &&
          images.map((img, i) => {
            return (
              <img
                key={i}
                className={`rounded-t-lg w-full h-full object-cover ${currentIndex === i ? '' : 'hidden'}`}
                src={img}
                alt=""
              />
            )
          })}
      </figure>
    </div>
  )
}

export default Slider

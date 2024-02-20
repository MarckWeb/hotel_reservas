const Slider = ({ room }: any) => {
  console.log(room)
  // const Gallery = () => {
  //   return (
  //     <AliceCarousel
  //       mouseTracking
  //       items={room[0].images.map((elem) => {
  //         return (
  //           <img
  //             className="w-full h-full  object-cover"
  //             src={elem}
  //             alt="Imagen"
  //           />
  //         )
  //       })}
  //       disableButtonsControls
  //       disableDotsControls
  //     />
  //   )
  // }
  return (
    <figure className="">
      <img
        className="w-full h-full object-cover"
        src={room[0]?.images[1]}
        alt=""
      />
    </figure>
  )
}

export default Slider

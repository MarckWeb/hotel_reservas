const Slider = ({ room }: any) => {
  console.log(room)

  return (
    <figure className="col-span-3 ">
      <img
        className="rounded-t-lg w-full h-full"
        src={room[0]?.images[1]}
        alt=""
      />
    </figure>
  )
}

export default Slider

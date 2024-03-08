const Comments = () => {
  return (
    <section className="w-full h-screen bg-main-background bg-cover bg-center overflow-hidden relative py-16">
      <article className="w-full max-w-[900px]  m-auto bg-background-cards  flex flex-col items-center gap-2 rounded-lg border border-color-text-second p-4">
        <div className="w-[600px] h-[100px] bg-backgroun-title"></div>
        <div className="w-[600px] h-[100px] bg-backgroun-title"></div>
        <div className="w-[600px] h-[100px] bg-backgroun-title">
          <p className=" text-center text-lg text-white">
            "Estamos trabajando en esta en las funcionalidades de esta Pagína
            :)"
          </p>
        </div>
        <div className="w-[600px] h-[100px] bg-backgroun-title"></div>
        <div className="w-[600px] h-[100px] bg-backgroun-title"></div>
      </article>
    </section>
  )
}

export default Comments

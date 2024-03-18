interface PropsFooter {
  icon: string
  title: string
  subtitle: string
}

const Footer: React.FC<PropsFooter> = ({ icon, title, subtitle }) => {
  return (
    <footer className=" flex flex-row justify-center items-center gap-4 mb-auto bg-gradient-to-b from-zinc-900 via-zinc-700 to-zinc-900 text-white font-extralight p-3 mt-[50px] md:mt-10">
      <img className="w-[100px] h-[100px]" src={icon} alt="" />
      <section className="text-center">
        <p>{title}</p>
        <p className="text-background-second text-[12px]">{subtitle}</p>
      </section>
    </footer>
  )
}

export default Footer

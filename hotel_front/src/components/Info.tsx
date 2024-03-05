import Starts from './Starts'

const Info = () => {
  return (
    <div className="flex flex-col gap-2 text-justify bg-black p-4 md:col-span-2">
      <div className="flex justify-between items-center">
        <h2 className="text-background-second">Historia del Hotel</h2>
        <Starts />
      </div>
      <p>
        Descubre la historia que envuelve nuestro encantador Hotel Palacio Real.
        Fundado en 1920 por el visionario empresario Roberto Hernández, este
        majestuoso edificio ha sido testigo de innumerables historias a lo largo
        de los años.
      </p>
      <p>
        Desde sus humildes comienzos como posada local hasta convertirse en un
        símbolo de lujo y elegancia, nuestro hotel ha sido cuidadosamente
        restaurado para preservar su esplendor original mientras ofrece todas
        las comodidades modernas.
      </p>
      <p>
        Situado en el corazón de la ciudad, cada rincón de nuestro Palacio Real
        respira la rica herencia cultural de nuestra región.
      </p>
      <p>
        Únete a nosotros y sumérgete en la opulencia histórica mientras creas
        tus propios recuerdos inolvidables
      </p>
    </div>
  )
}

export default Info

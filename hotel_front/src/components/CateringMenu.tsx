import Select from './Select'

const CateringMenu = () => {
  return (
    <section className="border border-red-700">
      <Select
        name="entrance"
        label="Entrantes"
        option1="Ensalada de Verdura"
        option2="Vieiras a la plancha"
        option3="Tartaleta de champiñones"
      />
      <Select
        name="first"
        label="Primeros"
        option1="Risotto de setas salvajes con queso"
        option2="Ensalada de langosta con aguacate"
        option3="Crema de calabaza asada"
      />
      <Select
        name="second"
        label="Segundos"
        option1="Salmón al horno y puré de patatas"
        option2="Solomillo de ternera a la parrilla"
        option3="Paella marinera con langostinos"
      />
      <Select
        name="desserts"
        label="Postres"
        option1="Tarta de chocolate negro"
        option2="Crème brûlée de vainilla con caramelo"
        option3="Soufflé de limón con coulis de mango y chantilly"
      />
      <Select
        name="wines"
        label="Vinos"
        option1="Malbec argentino, cosecha reserva"
        option2="Chardonnay francés, Grand Cru"
        option3="Cabernet Sauvignon chileno, reserva especial"
      />
      <Select
        name="drinks"
        label="Bebidas"
        option1="Mojito clásico con hojas de menta fresca y lima"
        option2="Martini seco con aceitunas verdes."
        option3="Agua mineral con gas, con una rodaja de limón."
      />
    </section>
  )
}

export default CateringMenu

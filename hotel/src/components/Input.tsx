

const Input = ({ icon, register }) => {
   return (
      <div className="flex gap-2 items-center bg-gradient-to-b from-zinc-900 via-zinc-900 to-zinc-900 py-1 px-2 rounded">
         <label htmlFor="name">{icon}</label>
         <input type="text" className="bg-transparent outline-none text-color-text-second font-light"
            {...register('name', {
               required: {
                  value: true,
                  message: 'El nombre es requerido'
               },
               minLength: {
                  value: 2,
                  message: 'Nombre debe tener al menos 2 caracteres'
               },
               maxLength: {
                  value: 20,
                  message: 'Nombre debe tener maximo 20 caracteres'
               }
            })} />
      </div>
   )
}

export default Input


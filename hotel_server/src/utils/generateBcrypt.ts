import * as bcrypt from 'bcrypt';

//funcion que encripta la contraseña
const encryptPassword = async (password: string, saltOrRounds: number) => {
   try {
      const passwordEncrypt = await bcrypt.hash(password, saltOrRounds);
      return passwordEncrypt
   } catch (error) {
      console.error('Error al encriptar la contraseña:', error)
   }
}

//funcion que compra la contraseña plana y la encriptada
const comparePassword = async (password: string, passwordHash: string) => {
   try {
      console.log(password, passwordHash)
      return await bcrypt.compare(password, passwordHash);
   } catch (error) {
      console.error('Error al comparar contraseñas:', error)
      throw error
   }
}

export {
   encryptPassword,
   comparePassword
}
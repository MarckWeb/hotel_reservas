import axios, { AxiosResponse } from "axios";
import { LoginValues } from "../types/formValues";
import { FormValues } from "../types/formValues";
import { User, Userlogin } from "../types/loginUser";

const baseUrl = 'http://localhost:3000/'

const getUserId = async (id: string): Promise<User> => {
   try {
      const response: AxiosResponse<User> = await axios.get(`${baseUrl}users/${id}`);
      return response.data;
   } catch (error) {
      console.error(`Error al obtener el usuario con ID ${id}:`, error);
      throw error;
   }
}


const loginUser = async (credentials: LoginValues): Promise<any> => {
   try {
      const response: AxiosResponse<User> = await axios.post(`${baseUrl}auth/login`, credentials)
      console.log(response)
      return response.data
   } catch (error) {
      console.error(`Error al iniciar sesion}:`, error);
      throw error;
   }
   //ver si la contraseña es incorrecta
}

const registerUser = async (objectUser: FormValues): Promise<any> => {
   const response: AxiosResponse<User> = await axios.post(`${baseUrl}auth/register`, objectUser)
   return response.data
}

const loginService = {
   loginUser,
   registerUser,
   getUserId
}

export default loginService